import { useEffect, useState } from 'react'

const main = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const projCards = document.querySelectorAll('.project-card-select');

    const handleScroll = (e: WheelEvent) => {
      if (isScrolling) return;

      let newIndex = currentIndex;

      if (e.deltaY > 0 && currentIndex < projCards.length - 1) {
        newIndex = currentIndex + 1;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        newIndex = currentIndex - 1;
      }

      if (newIndex !== currentIndex) {

        // Remove is-selected from all
        projCards.forEach((el) => el.classList.remove('is-selected'));

        // Add is-selected to new active card
        projCards[newIndex].classList.add('is-selected');

        setCurrentIndex(newIndex);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 300);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentIndex, isScrolling]);

  return (
    <main className='grid justify-center items-center h-screen bg-black'>
      <h1 className='text-white text-2xl'>Main</h1>

      <div className='home-list-cards flex absolute'>
          <button className="project-card-select"></button>
          <button className="project-card-select"></button>
          <button className="project-card-select"></button>
          <button className="project-card-select"></button>
          <button className="project-card-select"></button>
      </div>
    </main>
  )
}

export default main