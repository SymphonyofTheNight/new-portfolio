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
              <div className={`${ iconTrigger ? 'h-[100vh] transition-all duration-500 delay-[500ms]' : 'h-[0vh] transition-all duration-500 delay-[600ms]'} flex justify-end max-w-[1050px] w-full right-0 relative overflow-hidden`}>
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
                    <div className='nav-list py-[3.8rem] px-[2rem] pb-[4.8rem] border-t border-t-[rgba(16,16,16,0.2)] flex items-start justify-between '>
                      <h4 className='text-bg-counter pt-4 pb-[3.2rem]'>
                        (Links)
                      </h4>
                      <div className='w-[40.5rem]'>
                        <a className='pt-4 pb-[2.2rem] flex items-center justify-start border-b border-b-[rgba(16,16,16,0.2)] cursor-pointer group'>
                          <span className='text-bg-counter text-[1.3rem]'>(01)</span>
                          <span className='text-loader-bg pl-5 text-[1.5rem] transition-all duration-200 group-hover:pl-10'>Projects</span>
                        </a>
                        <a className='pt-9 pb-[2.2rem] flex items-center justify-start border-b border-b-[rgba(16,16,16,0.2)] cursor-pointer group'>
                          <span className='text-bg-counter text-[1.3rem]'>(02)</span>
                          <span className='text-loader-bg pl-5 text-[1.5rem] transition-all duration-200 group-hover:pl-10'>About</span>
                        </a>
                        <a className='pt-9 pb-[2.2rem] flex items-center justify-start border-b border-b-[rgba(16,16,16,0.2)] cursor-pointer group'>
                          <span className='text-bg-counter text-[1.3rem]'>(03)</span>
                          <span className='text-loader-bg pl-5 text-[1.5rem] transition-all duration-200 group-hover:pl-10'>Archives</span>
                        </a>
                        <a className='pt-9 pb-[2.2rem] flex items-center justify-start border-b border-b-[rgba(16,16,16,0.2)] cursor-pointer group'>
                          <span className='text-bg-counter text-[1.3rem]'>(04)</span>
                          <span className='text-loader-bg pl-5 text-[1.5rem] transition-all duration-200 group-hover:pl-10'>Contact</span>
                        </a>
                      </div>
                    </div>
                    <div className='nav-bt'>

                    </div>
                  </div>
                </div>
              </div>
        </div>
  )
}

export default Dropdown