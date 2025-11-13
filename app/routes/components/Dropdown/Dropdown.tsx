import { useState } from "react";
import { Link, useNavigate } from "react-router";

interface DropdownProps {
    iconTrigger: boolean
    setIconTrigger: any
    setPointerOff: any
    routeToggle: any
    setRouteToggle: any
}

const Dropdown = ({ iconTrigger, setIconTrigger, setPointerOff, routeToggle ,setRouteToggle }: DropdownProps ) => {

  const navigate = useNavigate();

  const [Hovered, SetHovered] = useState<number | null>(null);
  const [menuToggle, setMenuToggle] = useState({
    project: true,
    about: false,
    archives: false,
    contact: false,
  });

  const toggleFunc = (key: keyof typeof menuToggle) => {
    setMenuToggle(menu => {
      const allFalse = Object.fromEntries(
        Object.keys(menu).map(k => [k, false])
      ) as typeof menu; 

      return { ...allFalse, [key]: !menu[key] };
    });
  };

  const [links] = useState<Array<string>>(["Instagram", "Discord", "LinkedIn"])

  return (
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 
            ${iconTrigger ? 'dropdown-active h-full transition-all duration-500 delay-[1000ms]' : 'h-[0%] transition-all duration-500 delay-[1200ms]'}
                w-[100vw] bg-transparent backdrop-blur-[1px]
                flex flex-row items-start overflow-hidden`}
            >
              <div className={`${iconTrigger ? 'flex' : 'h-[0vh]'} flex-1 bg-red-200 relative`}>
              </div>
              <div className={`${ iconTrigger ? 'h-[100vh] transition-all duration-500 delay-[500ms]' : 'h-[0vh] transition-all duration-500 delay-[600ms]'} flex justify-end max-w-[1050px] w-full right-0 relative overflow-hidden xs:p-[10px] sm:p-0`}>
                <button
                    className={`absolute bottom-[10px] left-[-75px]
                      bg-white h-[60px] w-[60px]
                      transition-all duration-500 cursor-pointer
                      ${iconTrigger
                        ? 'opacity-100 delay-[1500ms] pointer-events-auto'
                        : 'opacity-0 delay-[0ms] pointer-events-auto'}
                    sm:hidden xl:block `}
                    onTransitionEnd={() => {
                      if (!iconTrigger) setTimeout(() => setPointerOff(true), 500);
                    }}
                    onClick={() => setIconTrigger(!iconTrigger)}
                  >
                </button>
                <div className="bg-white w-[100%] transition-all duration-500">
                  {/* contents */}
                  <div className='nav-menu flex flex-col justify-start items-stretch'>
                    <div className='nav-tp py-[1.2rem] px-[2rem]'>
                        <h2 className='text-loader-bg text-[3rem]'>Menu</h2>
                    </div>
                    <div className='nav-list py-[3.8rem] px-[2rem] pb-[4.8rem] border-t border-t-[rgba(16,16,16,0.2)] flex items-start justify-between xs:flex-col tb:[flex-direction:unset]'>
                      <h4 className='text-bg-counter pt-4 xs:pb-[1.2rem] tb:pb-[3.2rem]'>
                        (Links)
                      </h4>
                      <div className='xs:w-full tb:w-[40.5rem]'>
                        <a className='pt-4 pb-[2.2rem] flex items-center justify-start border-b border-b-[rgba(16,16,16,0.2)] cursor-pointer group'>
                          <span className='text-bg-counter text-[1.3rem]'>(01)</span>
                          <span className={`text-loader-bg text-[1.5rem] transition-all duration-200 ${menuToggle.project ? 'pl-5' : 'pl-15'} `}
                          onClick={() => toggleFunc("project")}
                          >Projects</span>
                        </a>
                        <a className='pt-9 pb-[2.2rem] flex items-center justify-start border-b border-b-[rgba(16,16,16,0.2)] cursor-pointer group'>
                          <span className='text-bg-counter text-[1.3rem]'>(02)</span>
                          <span className={`text-loader-bg text-[1.5rem] transition-all duration-200 ${menuToggle.about ? 'pl-5' : 'pl-15'} `}
                          onClick={() => {
                            toggleFunc("about")
                            setIconTrigger(!iconTrigger)
                            navigate("/about")
                            setRouteToggle({...routeToggle, about: !routeToggle.about })
                          }}
                          >About</span>
                        </a>
                        <a className='pt-9 pb-[2.2rem] flex items-center justify-start border-b border-b-[rgba(16,16,16,0.2)] cursor-pointer group'>
                          <span className='text-bg-counter text-[1.3rem]'>(03)</span>
                          <span className={`text-loader-bg text-[1.5rem] transition-all duration-200 ${menuToggle.archives ? 'pl-5' : 'pl-15'} `}
                          onClick={() => toggleFunc("archives")}
                          >Archives</span>
                        </a>
                        <a className='pt-9 pb-[2.2rem] flex items-center justify-start border-b border-b-[rgba(16,16,16,0.2)] cursor-pointer group'>
                          <span className='text-bg-counter text-[1.3rem]'>(04)</span>
                          <span className={`text-loader-bg text-[1.5rem] transition-all duration-200 ${menuToggle.contact ? 'pl-5' : 'pl-15'}`}
                          onClick={() => toggleFunc("contact")}
                          >Contact</span>
                        </a>
                      </div>
                    </div>
                    <div className='absolute bottom-0 w-full nav-bt flex xs:items-start tb:items-end justify-between xs:pb-[10px] sm:pb-[0px] xs:px-[22px] sm:px-[2rem] xs:flex-col tb:[flex-direction:unset]'>
                      <h4 className='text-bg-counter pb-4'>
                        (Social Media)
                      </h4>
                      <div className='nav-bt-soc grid xs:pt-0 tb:pt-4 pb-4'>
                        <ul>
                          {links.map((soc, i) => (
                            <li className="leading-[15px] cursor-pointer group" key={soc} onMouseEnter={() => SetHovered(i)} onMouseLeave={() => SetHovered(null)}>
                              <Link to="" className={`${Hovered === null ? "text-loader-bg" : Hovered === i ? "text-loader-bg pl-3" : "text-bg-counter" } text-[12px] transition-all dura`}>{soc}</Link>
                            </li>
                          ))}

                        </ul>
                      </div>
                      <p className='text-bg-counter pb-4 xs:absolute tb:[position:unset] xs:right-[42px] xs:bottom-[10px] tb:[right:unset]'>©2025</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
  )
}

export default Dropdown