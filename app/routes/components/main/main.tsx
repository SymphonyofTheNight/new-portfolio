import { useState, useEffect } from "react";

// data
import { projects } from "../../../admin/data";

// components
import Navigation from "../Navigation/Navigation";
import HomeList from "../HomeList/HomeList";

const Main = () => {
  const [projectIndex, setprojectIndex] = useState<number>(0);
  const [currentSrc, setCurrentSrc] = useState(projects[0].image);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false); // start fade/blur out
    const timeout = setTimeout(() => {
      setCurrentSrc(projects[projectIndex].image); // swap image
      setAnimate(true); // fade/blur in
    }, 300); // must match duration below

    return () => clearTimeout(timeout);
  }, [projectIndex]);

  return (
    <main className="flex justify-center items-start h-screen bg-black relative overflow-hidden w-full p-[1.2%] pl-[0%] pr-[0%]">
      <img
        src={currentSrc}
        alt={`Project ${projectIndex}`}
        className={`absolute inset-0 w-full h-full object-cover brightness-50 
          transition-all duration-700 ease-in-out
          ${animate ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"}
        `}
      />
      <Navigation />
      <div className="home-project-title">
        <h1 className="text-white text-[48px]">{projects[projectIndex].title}</h1>
        <p className="text-white text-[24px]">{projects[projectIndex].description}</p>
      </div>
      <HomeList projects={projects} setprojectIndex={setprojectIndex} />
    </main>
  );
};

export default Main;
