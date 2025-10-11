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
              <div className={`${iconTrigger ? 'hamburger-line-one-true' : 'hamburger-line-one-false'} bg-white absolute h-[2px] w-[80px] -translate-x-1/2 -translate-y-1/2 left-[50%] top-[30%] transition-all duration-[.5s] delay-750 flex items-center justify-center`}>
                <div className={`bg-black origin-left h-[2px] transition-all duration-[.5s] ${iconTrigger ? 'w-[100%]' : 'w-[0%]'}`}></div>
              </div>
              <div className={`${iconTrigger ? 'hamburger-line-two-true' : 'hamburger-line-two-false'} bg-white absolute h-[2px] w-[80px] -translate-x-1/2 -translate-y-1/2 left-[50%] top-[65%] transition-all duration-[.5s] delay-750 flex items-center justify-center`}>
                <div className={`bg-black origin-left h-[2px] transition-all duration-[.5s] ${iconTrigger ? 'w-[100%]' : 'w-[0%]'}`}></div>
              </div>
            </button>
            {/* sidebar */}
            <div className={`absolute top-[50%] left-[50%] ${iconTrigger ? 'h-full' : 'h-[0%]'} w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-transparent backdrop-blur-[1px]`}>
              <div>
                
              </div>
            </div>
        </nav>
    </header> 
  )
}

export default Navigation;