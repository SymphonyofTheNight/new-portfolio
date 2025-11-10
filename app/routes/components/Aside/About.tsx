import { useOutletContext, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import SvgBtnIconBlack from "../_Svg/SvgBtnIconBlack";
import SvgBtnIconWhite from "../_Svg/SvgBtnIconWhite";

type OutletContextType = {
  routeToggle: { about: boolean };
};

const About = () => {
  const { routeToggle } = useOutletContext<OutletContextType>();
  const [show, setShow] = useState<boolean>(false);
  const [hideBtn, setHideBtn] = useState<boolean>(false);

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

  return (
    <aside
      className={`absolute top-0 left-1/2 -translate-x-1/2 ${ show ? "h-full transition-all duration-500 delay-[500ms] flex flex-row items-start overflow-hidden z-40" : "h-[0%] transition-all duration-500 delay-[0ms]" } w-[100vw] bg-transparent backdrop-blur-[1px] flex flex-row items-start overflow-hidden z-40`}>
      <div className={`${ show ? "flex" : "h-[0vh]" } flex-1 bg-red-200 relative transition-all duration-500`}></div>
      <div className={`${ show ? "h-[100vh] transition-all duration-500 delay-[200ms]" : "h-[0vh] transition-all duration-500 delay-[0ms]" } flex justify-end max-w-[1100px] w-full right-0 relative`}>
        <div className="bg-black w-[100%] transition-all duration-500 relative">
          {/* exit */}
          <button
            className={`absolute left-[15px] bottom-[15px] h-[45px] w-[45px] bg-white rounded-[2px] py-[15px] px-[15px] cursor-pointer transition-all duration-500 
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
          <div className="about-tp flex flex-col justify-start items-stretch">
            <div className="py-[1rem] border-b border-b-[rgba(150,150,150,0.2)] pb-12 pt-4 px-[2rem]">
              <h3 className="text-bg-counter text-3xl h-auto">
                <span className="text-bg-counter text-[22px] pt-3 pr-[100px]">
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
            <div className="nav-list py-[1.8rem] px-[2rem] pb-[4.8rem] border-t border-t-[rgba(16,16,16,0.2)] flex items-start justify-between">
              <h4 className="text-bg-counter pt-8 pb-[3.2rem]">(Links)</h4>
              <div className="w-[40.5rem]">
                {["Art Direction", "UI/UX Design", "Brand Identity", "Web Development"].map(
                  (item, i) => (
                    <a key={i} className="pt-8 pb-[2.2rem] flex items-center justify-between border-b border-b-[rgba(150,150,150,0.2)] relative group">
                      <div>
                        <span className="text-bg-counter text-[1.1rem]">
                          ({String(i + 1).padStart(2, "0")})
                        </span>
                        <span className="text-white pl-5 text-[1.2rem]">
                          {item}
                        </span>
                      </div>
                      <div className="w-[400px] leading-[100%] pr-[60px]">
                        <span className="text-bg-counter text-[12px] transition-transform duration-400 hidden group-hover:block">
                            Designing and building seamless digital experiences from front-end interfaces to back-end architecture. I transform ideas into scalable, high-performance web applications by combining clean code, efficient data flow, and modern frameworks. Every project is crafted for reliability, usability, and long-term growth.
                        </span>
                      </div>
                      <div className="about-services-list transform -translate-x-1/2 -translate-y-1/2 absolute right-[20px] top-[50%] transition-transform duration-200 group-hover:rotate-[90deg]">
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
