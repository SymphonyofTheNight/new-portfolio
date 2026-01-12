import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { cn } from "utils/utils";

// data
import { projects } from "../../admin/data";

// components
import Navigation from "../components/Navigation/Navigation";
import HomeList from "../components/HomeList/HomeList";

const Main = () => {
  const [projectIndex, setprojectIndex] = useState<number>(0);
  const [currentSrc, setCurrentSrc] = useState(projects[0].image);
  const [animate, setAnimate] = useState(true);
  const [routeToggle, setRouteToggle] = useState({ project: true, about: false, archive: false, contact: false });

  const location = useLocation(); // ✅ to detect route changes

  useEffect(() => {
    const entries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const navType = entries[0]?.type;

    if (navType === "reload") {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    setAnimate(false); // start fade/blur out

    const nextSrc = projects[projectIndex].image;
    const img = new Image();
    img.src = nextSrc;

    const timeout = setTimeout(() => {
      // only swap once image is loaded to avoid flicker
      if (img.complete) {
        setCurrentSrc(nextSrc);
        setAnimate(true); // fade/blur in
      } else {
        // if not yet loaded, wait for it
        img.onload = () => {
          setCurrentSrc(nextSrc);
          requestAnimationFrame(() => setAnimate(true));
        };
      }
    }, 300); // 🔹 keep your original 300ms delay

    return () => {
      clearTimeout(timeout);
      img.onload = null;
    };
  }, [projectIndex]);

  useEffect(() => {
    const pathname = location.pathname;

    const nextState = {
      about: pathname === "/about",
      archives: pathname === "/archives",
      contact: pathname === "/contact",
    };

    // Delay only when closing
    const shouldDelay =
      !nextState.about && !nextState.archives;

    const timer = setTimeout(
      () => {
        setRouteToggle((prev) => ({
          ...prev,
          ...nextState,
        }));
      },
      shouldDelay ? 300 : 0
    );

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <main className="flex justify-center items-start h-screen bg-black relative overflow-hidden w-full xs:pl-[0%] xs:pr-[0%] xs:p-[18px] xs:pt-[30px] md:p-[1.55%] md:pt-[30px] md:pl-[0%] md:pr-[0%] ">
      <img
        src={currentSrc}
        alt={`Project ${projectIndex}`}
        className={cn(
          'absolute inset-0 w-full h-full object-cover brightness-50 transition-all duration-700 ease-in-out',
          {
            'opacity-100 blur-0 scale-100': animate,
            'opacity-0 blur-md scale-105': !animate,
          }
        )}
      />
      <Navigation routeToggle={routeToggle} setRouteToggle={setRouteToggle}/>
      <div className="project-title-section xs:flex-col md:[flex-direction:unset]">
        <h1 className="text-white xs:text-[8vw] sm:text-[48px]">{projects[projectIndex].title}</h1>
        <p className="text-white xs:text-[4vw] sm:text-[24px]">{projects[projectIndex].description}</p>
      </div>
      <div className="absolute bottom-[2%] pl-[2%] pr-[2%] xs:hidden sm:flex items-end gap-18 h-[100px] w-full">
          <div>
            <h3 className="text-bg-counter">Credits</h3>
            <p className="m-0 p-0">{projects[projectIndex].credits}</p>
          </div>
          <div>
            <h3 className="text-bg-counter">Role</h3>
            <p className="m-0 p-0">{projects[projectIndex].role}</p>
          </div>
          <div>
            <h3 className="text-bg-counter">Year</h3>
            <p className="m-0 p-0">{projects[projectIndex].year}</p>
          </div>
      </div>
      <HomeList  projects={projects} setprojectIndex={setprojectIndex} />

      {/* side components */}
      <Outlet context={{ routeToggle, setRouteToggle }} />
    </main>
  );
};

export default Main;