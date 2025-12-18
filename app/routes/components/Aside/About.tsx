import { useOutletContext, useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import SvgBtnIconBlack from "../_Svg/SvgBtnIconBlack";
import SvgBtnIconWhite from "../_Svg/SvgBtnIconWhite";

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

// import img
import about_mockup_one from "../../../../assets/imgs/about_mockup_one.webp"

// import data
import { services, projects } from "~/admin/data";

type OutletContextType = {
  routeToggle: { about: boolean };
};

const About = () => {
  const { routeToggle } = useOutletContext<OutletContextType>();
  const [show, setShow] = useState<boolean>(false);
  const [hideBtn, setHideBtn] = useState<boolean>(false);
  const [mobileServiceToggle, setMobileServiceToggle] = useState<number | null>(null);
  const [checkMatchMedia, setCheckMatchMedia] = useState<boolean>(false);
  const [imgOnload, setImgOnload] = useState<boolean>(false);

  const aboutPromoteRef =  useRef<HTMLImageElement | null>(null);
    
  const navigate = useNavigate();

  useEffect(() => {
    if (routeToggle.about) {
      const timer = setTimeout(() => setShow(true), 2000); 
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShow(false), 0);
      return () => clearTimeout(timer);
    }
  }, [routeToggle.about]);

  useState(() => {
    const tabletViewport = window.matchMedia("(max-width: 1024px)");
    if(tabletViewport.matches) return setCheckMatchMedia(!checkMatchMedia)
  })

  useGSAP(() => {
    if (!imgOnload || !aboutPromoteRef.current) return;

    const height = aboutPromoteRef.current.offsetHeight - 70;

    gsap.set(".animated-explore", { top: 20 });

    gsap.to(".animated-explore", {
      top: height,
      ease: "none",
      scrollTrigger: {
        trigger: ".animated-explore",
        scroller: ".about-tp",
        start: "center center",
        end: `+=${height}`,
        scrub: 4,
      }
    });

      console.log(height)
  }, [imgOnload]); 

  console.log(aboutPromoteRef.current?.offsetHeight)

  console.log(imgOnload)

  return (
    <aside
      className={`absolute top-0 left-1/2 -translate-x-1/2 ${ show ? "dropdown-active h-full transition-all duration-500 delay-[500ms] flex flex-row items-start z-40" : "h-[0%] transition-all duration-500 delay-[0ms]" } w-[100vw] bg-transparent backdrop-blur-[1px] flex flex-row items-start overflow-hidden z-40`}>
      <div className={`${ show ? "flex" : "h-[0vh]" } flex-1 bg-red-200 relative transition-all duration-500`}></div>
      <div className={`${ show ? "h-[100vh] transition-all duration-500 delay-[200ms]" : "h-[0vh] transition-all duration-500 delay-[0ms]" } flex justify-end max-w-[1200px] w-full right-0 relative`}>
        <div className="bg-black w-[100%] transition-all duration-500 relative">
          {/* exit */}
          <button
            className={`absolute z-20 left-[15px] bottom-[15px] h-[45px] w-[45px] bg-white rounded-[2px] py-[15px] px-[15px] cursor-pointer transition-all duration-500 
              ${show && !hideBtn ? "opacity-100 delay-[1500ms]" : "opacity-0 delay-[0ms]"} group`}
            onClick={() => {
              setHideBtn(true);
              setTimeout(() => {
                setShow(false);
                setHideBtn(false); 
                setTimeout(() => {
                  navigate("/")
                }, 1000)
              }, 600); 
            }}
          >
            <div className="transition-transform duration-200 group-hover:rotate-[90deg]">
              <SvgBtnIconBlack />
            </div>
          </button>
          {/* contents */}
          <div className="about-tp flex flex-col justify-start items-stretch overflow-y-auto max-h-[100vh]">
            <div className="py-[1rem] border-b border-b-[rgba(150,150,150,0.2)] pb-12 pt-4 px-[2rem]">
              <h3 className="text-bg-counter text-3xl h-auto">
                <span className="text-bg-counter text-[16px] pt-3 pr-[100px]">
                  (Introduction)
                </span>
                <span className="text-white">
                  Web Developer and Designer shaping digital experiences through
                  creativity and code.
                </span>
                &nbsp; Focused on building clean, intuitive, and modern
                interfaces that leave a lasting impression.
              </h3>
            </div>
            <div className="nav-list py-[1.8rem] px-[2rem] pb-[4.8rem] border-t border-t-[rgba(16,16,16,0.2)] flex items-start justify-between xs:flex-col lg:[flex-direction:unset]">
              <h4 className="text-bg-counter xs:pt-[1rem] xs:pb-[0rem] lg:pt-8 lg:pb-[3.2rem]">(Links)</h4>
              <div className="xs:w-full lg:w-[40.5rem]">
                {services.map(
                  (item, i) => (
                    <a key={i} className="pt-8 pb-[2.2rem] flex xs:flex-col lg:[flex-direction:unset] xs:items-start justify-between border-b border-b-[rgba(150,150,150,0.2)] relative cursor-pointer group"
                    onClick={() => {
                      setMobileServiceToggle(mobileServiceToggle === i ? null : i)
                    }}
                    >
                      <div className="my-auto mr-auto ml-0">
                        <span className="text-bg-counter text-[1.1rem]">
                          ({String(i + 1).padStart(2, "0")})
                        </span>
                        <span className="text-white pl-5 text-[1.2rem]">
                          {item.title}
                        </span>
                      </div>
                      <div className={`w-[400px] leading-[100%] pr-[60px]
                        ${mobileServiceToggle === i && checkMatchMedia ? "h-auto pt-[10px]" : null } 
                        ${checkMatchMedia ? "h-[0px]" : null }
                        `}>
                        <span className={`text-bg-counter text-[12px] opacity-0 transform group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 pointer-events-none
                          ${mobileServiceToggle === i && checkMatchMedia ? "opacity-100 xs:h-[0px] lg:h-auto" : "opacity-0 xs:h-[0px] lg:h-auto"}
                          ${checkMatchMedia ? null : "transition-all duration-400"} 
                          `}>
                          {item.description}
                        </span>
                      </div>
                      <div className="about-services-list transform -translate-x-1/2 -translate-y-1/2 absolute right-[20px] xs:top-[46px] lg:top-[50%] transition-transform duration-200 group-hover:rotate-[90deg] ">
                        <SvgBtnIconWhite />
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="mt-[40px] mb-[40px] mx-auto w-[94%] h-auto relative">
              <img className="about-promote-img rounded-[8px]" src={about_mockup_one} ref={aboutPromoteRef} onLoad={() => setImgOnload(!imgOnload)}/>
              <div className="animated-explore absolute h-auto w-full flex justify-between top-[20px] px-[20px]">
                <a className="h-[50px] w-auto flex items-center justify-center">
                  <span className="text-white text-2xl">Selected Project</span>
                </a>
                <a className="h-[45px] w-[150px] bg-white flex items-center justify-center rounded-[4px] cursor-pointer">
                  <span className="text-black flex items-center gap-[10px]">Explore all 
                    <div className="explore-icon">
                      <SvgBtnIconBlack/>
                    </div>
                  </span>
                </a>
              </div>
              <h4 className="text-bg-counter text-1xl mt-[20px]">Projects (2025)</h4>
            </div>
            <div className="py-[1rem] border-b border-b-[rgba(150,150,150,0.2)] pb-12 pt-4 px-[2.25rem]">
              <h3 className="text-bg-counter text-3xl h-auto flex">
                <div className="w-[25%]">
                  <span className="text-bg-counter text-[16px] pt-3 pr-[100px]">
                    (The Archives)
                  </span>
                </div>
                <div className="w-[75%]">
                  <span className="text-white pl-[12vw]">
                    A place where imagination takes its first step into light.
                    <span className="text-bg-counter">
                      &nbsp;where hidden concepts take shape and finally find their voice.
                    </span>
                  </span>
                </div>
              </h3>
            </div>
            <div className="nav-list py-[1.8rem] px-[2rem] pb-[4.8rem] border-t border-t-[rgba(16,16,16,0.2)] flex items-start justify-between xs:flex-col lg:[flex-direction:unset]">
              <div className="xs:w-full lg:w-full">
                {projects.map(
                  (item, i) => (
                    <a key={i} className="pt-[1rem] pb-[1rem] flex xs:flex-col lg:[flex-direction:unset] xs:items-start justify-between border-b border-b-[rgba(150,150,150,0.2)] relative cursor-pointer group"
                    onClick={() => {
                      setMobileServiceToggle(mobileServiceToggle === i ? null : i)
                    }}
                    >
                      <div className="my-auto mr-auto ml-0">
                        <span className="text-bg-counter text-[1rem]">
                          ({String(i + 1).padStart(2, "0")})
                        </span>
                        <span className="text-white pl-5 text-[1rem]">
                          {item.title}
                        </span>
                      </div>
                      <div className={`w-auto leading-[100%] pr-[120px]
                        ${mobileServiceToggle === i && checkMatchMedia ? "h-auto pt-[10px]" : null } 
                        ${checkMatchMedia ? "h-[0px]" : null }
                        `}>
                          <img
                            src={item.image}
                            className="
                              w-[90px] h-auto object-contain cursor-pointer
                              opacity-0 scale-95 pointer-events-none
                              transition-all duration-300 ease-out
                              group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                            "
                          />
                      </div>
                      <div className="about-services-list transform -translate-x-1/2 -translate-y-1/2 absolute right-[20px] xs:top-[46px] lg:top-[50%] transition-transform duration-200 group-hover:rotate-[90deg] ">
                        <SvgBtnIconWhite />
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default About;