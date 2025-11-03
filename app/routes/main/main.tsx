import { useState, useEffect } from "react";

// data
import { projects } from "../../admin/data";

// components
import Navigation from "../components/Navigation/Navigation";
import HomeList from "../components/HomeList/HomeList";

const Main = () => {
  const [projectIndex, setprojectIndex] = useState<number>(0);
  const [currentSrc, setCurrentSrc] = useState(projects[0].image);
  const [animate, setAnimate] = useState(true);
  const [loaded, setLoaded] = useState(true); // new: track if image fully loaded

  useEffect(() => {
    setAnimate(false); // start fade/blur out
    setLoaded(false);  // prepare for new image load

    const nextSrc = projects[projectIndex].image;
    const img = new Image();
    img.src = nextSrc;

    const timeout = setTimeout(() => {
      // only swap once image is loaded to avoid flicker
      if (img.complete) {
        setCurrentSrc(nextSrc);
        setLoaded(true);
        setAnimate(true); // fade/blur in
      } else {
        // if not yet loaded, wait for it
        img.onload = () => {
          setCurrentSrc(nextSrc);
          setLoaded(true);
          requestAnimationFrame(() => setAnimate(true));
        };
      }
    }, 300); // 🔹 keep your original 300ms delay

    return () => {
      clearTimeout(timeout);
      img.onload = null;
    };
  }, [projectIndex]);

  return (
    <main className="flex justify-center items-start h-screen bg-black relative overflow-hidden w-full xs:pl-[0%] xs:pr-[0%] xs:p-[18px] md:p-[1.55%] md:pl-[0%] md:pr-[0%] ">
      <img
        src={currentSrc}
        alt={`Project ${projectIndex}`}
        className={`absolute inset-0 w-full h-full object-cover brightness-50 
          transition-all duration-700 ease-in-out
          ${animate ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"}
        `}
      />
      <Navigation />
      <div className="project-title-section xs:flex-col md:[flex-direction:unset]">
        <h1 className="text-white xs:text-[8vw] sm:text-[48px]">{projects[projectIndex].title}</h1>
        <p className="text-white xs:text-[4vw] sm:text-[24px]">{projects[projectIndex].description}</p>
      </div>
      <div className="absolute bottom-[2%] pl-[2%] pr-[2%] xs:hidden sm:flex items-end gap-18 h-[100px] w-full">
          <div>
            <h3 className="text-bg-counter">Credits</h3>
            <p className="m-0 p-0">{projects[projectIndex].title}</p>
          </div>
          <div>
            <h3 className="text-bg-counter">Role</h3>
            <p className="m-0 p-0">{projects[projectIndex].title}</p>
          </div>
          <div>
            <h3 className="text-bg-counter">Year</h3>
            <p className="m-0 p-0">{projects[projectIndex].title}</p>
          </div>
      </div>
      <HomeList projects={projects} setprojectIndex={setprojectIndex} />
    </main>
  );
};

export default Main;