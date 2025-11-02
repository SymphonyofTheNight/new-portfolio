import React from 'react'

interface DropdownProps {
    iconTrigger: boolean
    setIconTrigger: any
    setPointerOff: any
}

const Dropdown = ({ iconTrigger, setIconTrigger, setPointerOff }: DropdownProps ) => {
  return (
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 
            ${iconTrigger ? 'h-full transition-all duration-500 delay-[1000ms]' : 'h-[0%] transition-all duration-500 delay-[1200ms]'}
                w-[100vw] bg-transparent backdrop-blur-[1px]
                flex flex-row items-start overflow-hidden`}
            >
              <div className={`${iconTrigger ? 'flex' : 'h-[0vh]'} flex-1 bg-red-200 relative`}>
              </div>
              <div className={`${ iconTrigger
                    ? 'h-[100vh] transition-all duration-500 delay-[500ms]'
                    : 'h-[0vh] transition-all duration-500 delay-[600ms]'
                } flex justify-end max-w-[950px] w-full right-0 relative`}
              >
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
                </div>
              </div>
        </div>
  )
}

export default Dropdown