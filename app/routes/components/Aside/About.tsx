import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";

type OutletContextType = {
  routeToggle: { about: boolean };
};

const About = () => {
  const { routeToggle } = useOutletContext<OutletContextType>();
  const [show, setShow] = useState(false);

  // ✅ Animate after mount (smooth entry)
  useEffect(() => {
    if (routeToggle.about) {
      const timer = setTimeout(() => setShow(true), 2000); // short delay for smooth start
      return () => clearTimeout(timer);
    } else {
      // When leaving, hide with animation first
      const timer = setTimeout(() => setShow(false), 0);
      return () => clearTimeout(timer);
    }
  }, [routeToggle.about]);

  return (
    <aside
      className={`absolute top-0 left-1/2 -translate-x-1/2
      ${
        show
          ? "h-full transition-all duration-500 delay-[500ms] flex flex-row items-start overflow-hidden z-40"
          : "h-[0%] transition-all duration-500 delay-[0ms]"
      }
      w-[100vw] bg-transparent backdrop-blur-[1px] flex flex-row items-start overflow-hidden z-40`}
    >
      <div
        className={`${
          show ? "flex" : "h-[0vh]"
        } flex-1 bg-red-200 relative transition-all duration-500`}
      ></div>

      <div
        className={`${
          show
            ? "h-[100vh] transition-all duration-500 delay-[200ms]"
            : "h-[0vh] transition-all duration-500 delay-[0ms]"
        } flex justify-end max-w-[1100px] w-full right-0 relative overflow-hidden`}
      >
        <div className="bg-black w-[100%] transition-all duration-500">
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
                    <a
                      key={i}
                      className="pt-8 pb-[2.2rem] flex items-center justify-start border-b border-b-[rgba(150,150,150,0.2)]"
                    >
                      <span className="text-bg-counter text-[1.1rem]">
                        ({String(i + 1).padStart(2, "0")})
                      </span>
                      <span className="text-white pl-5 text-[1.2rem]">
                        {item}
                      </span>
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
