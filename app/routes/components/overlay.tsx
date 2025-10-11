import { Outlet } from "react-router";
import { useEffect, useState } from "react";

//  loading screen
import _Loader from "./_Loader/Loader";

const Overlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setInterval(() => {
        setIsLoading(false); 
      }, 5000);
    } else {
      const onLoad = () => setIsLoading(false);
      window.addEventListener("load", onLoad);

      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <>
      {/* {isLoading && <_Loader document={isLoading} />} */}

      <Outlet />
    </>
  );
};

export default Overlay;
