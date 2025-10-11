import { useEffect, useState } from "react";

const Loader = ({ document }: any ) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!document) return;

    const totalCount = 100;
    const totalTime = 4000; // 4 seconds
    const delay = totalTime / totalCount; // 4000ms / 100 = 40ms per step

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= totalCount) {
          clearInterval(interval);
          return totalCount;
        }
        return prev + 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [document]);

  return (
    <div className={`loader relative bg-loader-bg ${count === 100 ? 'opacity-0 transition-opacity duration-1000' : null }`}>
    <h1
      className="absolute text-white bottom-5">
      {count}%
    </h1>
    </div>
  );
};

export default Loader;
