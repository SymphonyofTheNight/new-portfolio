import { useState, useEffect } from 'react'

const Navigation = () => {

  const [iconTrigger, setIconTrigger] = useState<boolean>(false);

  return (
    <header className='w-full flex items-center justify-between pl-[2%] pr-[2%] z-5'>
        <p>Gino</p>
        <p className='absolute -translate-x-1/2 left-[50%]'>Web Design and Development</p>
        <nav>
            <button className='hamburger-btn-trigger relative grid items-center justify-center w-[95px] min-h-[50px] cursor-pointer z-[10]'
            onClick={() => setIconTrigger(!iconTrigger)}
            >
              <div className={`${iconTrigger ? 'hamburger-line-one-true' : 'hamburger-line-one-false'} bg-white absolute h-[2px] w-[80px] -translate-x-1/2 -translate-y-1/2 left-[50%] top-[30%] transition-all duration-[.2s] delay-750 flex items-center justify-center`}>
                <div className={`bg-black origin-left h-[2px] transition-all duration-[.5s] ${iconTrigger ? 'w-[100%]' : 'w-[0%]'}`}></div>
              </div>
              <div className={`${iconTrigger ? 'hamburger-line-two-true' : 'hamburger-line-two-false'} bg-white absolute h-[2px] w-[80px] -translate-x-1/2 -translate-y-1/2 left-[50%] top-[65%] transition-all duration-[.2s] delay-750 flex items-center justify-center`}>
                <div className={`bg-black origin-left h-[2px] transition-all duration-[.5s] ${iconTrigger ? 'w-[100%]' : 'w-[0%]'}`}></div>
              </div>
            </button>
            {/* sidebar */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2
                ${iconTrigger
                  ? 'h-full transition-all duration-500 delay-[1000ms]'
                  : 'h-[0%] transition-all duration-500 delay-[1200ms]'}
                w-[100vw] bg-transparent backdrop-blur-[1px]
                flex flex-row items-start overflow-hidden`}
            >
              {/* Left section */}
              <div className={`${iconTrigger ? 'flex' : 'h-[0vh]'} w-[49.5%] relative`}>
              </div>

              {/* Right panel */}
              <div
                className={`${
                  iconTrigger
                    ? 'h-[100vh] transition-all duration-500 delay-[500ms]'
                    : 'h-[0vh] transition-all duration-500 delay-[600ms]'
                } flex justify-end w-[55%] right-0 overflow-hidden relative`}
              >
                {/* Button: fades out first on close */}
              <button
                className={`absolute bottom-[1%] left-[0%]
                  ${iconTrigger
                    ? 'bg-white h-[60px] w-[60px] opacity-100 delay-[1500ms]'  // show last when opening
                    : 'opacity-0 delay-[0ms] pointer-events-none'}              // hide first when closing
                  transition-all duration-500`}
              >
              </button>
                {/* White panel inside (collapses after button) */}
                <div className="bg-white w-[92.5%] transition-all duration-500">
                </div>
              </div>
            </div>
        </nav>
    </header> 
  )
}

export default Navigation;