import { useState, useEffect } from 'react'

// component
import Dropdown from '../Dropdown/Dropdown';

const Navigation = ({ routeToggle ,setRouteToggle }: any) => {

  const [iconTrigger, setIconTrigger] = useState<boolean>(false);
  const [pointerOff, setPointerOff] = useState<boolean>(false);

  useEffect(() => {
    if (iconTrigger) {
      setPointerOff(false); 
    } else {
      const timer = setTimeout(() => setPointerOff(true), 500); 
      return () => clearTimeout(timer);
    }
  }, [iconTrigger]);

  return (
    <header className='w-full flex items-center justify-between xs:pl-[42px] xs:pr-[42px] md:pl-[2%] md:pr-[2%] z-5'>
        <p>Gino</p>
        <p className='absolute -translate-x-1/2 left-[50%] xs:hidden md:block'>Web Design and Development</p>
        <nav>
            <button className='hamburger-btn-trigger relative grid items-center justify-center xs:mt-[10px] md:mt-[0px] xs:w-[72px] md:w-[95px] min-h-[50px] cursor-pointer z-[10]'
            onClick={() => setIconTrigger(!iconTrigger)}
            >
              <div className={`${iconTrigger ? 'hamburger-line-one-true' : 'hamburger-line-one-false'} bg-white absolute h-[2px] w-[70px] -translate-x-1/2 -translate-y-1/2 left-[50%] top-[30%] transition-all duration-[.2s] delay-750 flex items-center justify-center`}>
                <div className={`bg-black origin-left h-[2px] transition-all duration-[.5s] ${iconTrigger ? 'w-[100%]' : 'w-[0%]'}`}></div>
              </div>
              <div className={`${iconTrigger ? 'hamburger-line-two-true' : 'hamburger-line-two-false'} bg-white absolute h-[2px] w-[70px] -translate-x-1/2 -translate-y-1/2 left-[50%] top-[65%] transition-all duration-[.2s] delay-750 flex items-center justify-center`}>
                <div className={`bg-black origin-left h-[2px] transition-all duration-[.5s] ${iconTrigger ? 'w-[100%]' : 'w-[0%]'}`}></div>
              </div>
            </button>
            {/* reusable dropdown */}
            <Dropdown iconTrigger={iconTrigger} setIconTrigger={setIconTrigger}  setPointerOff={setPointerOff} routeToggle={routeToggle} setRouteToggle={setRouteToggle}/>
        </nav>
    </header> 
  )
}

export default Navigation;