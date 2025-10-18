import React, { useEffect, useState, useRef } from 'react'

import type { Project } from '../../../admin/types/Project'

const HomeList = ({ projects, setprojectIndex }:{ 
  projects: Project[]; 
  setprojectIndex: React.Dispatch<React.SetStateAction<number>> 
} ) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

useEffect(() => {
  const projCards = document.querySelectorAll('.project-card-select');

  // Ensure index 0 is selected on first load
  if (projCards.length > 0 && currentIndex === 0) {
    projCards.forEach((el) => el.classList.remove('is-selected'));
    projCards[0].classList.add('is-selected');
  }

  projCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      projCards.forEach((c) => {
        if (c === card) {
          c.classList.add("hovered");
          c.classList.remove("not-hovered");
        } else {
          c.classList.add("not-hovered");
          c.classList.remove("hovered");
        }
    });
  });

  card.addEventListener("mouseleave", () => {
    projCards.forEach((c) => {
      c.classList.remove("hovered", "not-hovered");
    });
  });
});

  const handleScroll = (e: WheelEvent) => {
    if (isScrolling) return;

    let newIndex = currentIndex;

    if (e.deltaY > 0 && currentIndex < projCards.length - 1) {
      newIndex = currentIndex + 1;
    } else if (e.deltaY < 0 && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }

    if (newIndex !== currentIndex) {
      projCards.forEach((el) => el.classList.remove('is-selected'));
      projCards[newIndex].classList.add('is-selected');

      setCurrentIndex(newIndex);
      setIsScrolling(true);

      // get project info
      setprojectIndex(newIndex);

      setTimeout(() => setIsScrolling(false), 300);
    }
  };

  window.addEventListener('wheel', handleScroll);
  return () => {
    window.removeEventListener('wheel', handleScroll);
  };
}, [currentIndex, isScrolling]);


  return (
    <div className='home-list-cards flex absolute bottom-[2%] right-[2%] gap-[14px]'>
      {projects?.map((project: Project, index) => (
        <button className={`project-card-select ${index === currentIndex ? 'is-selected': 
          ''
        }`} key={project.id} 
        onClick={()=> {
          setCurrentIndex(index)
          setprojectIndex(index)
        }}
        >
          <img className='inset-0 h-full w-full object-cover rounded-[4px]' src={project.image}/>
        </button>
      ))}
    </div>
  )
}

export default HomeList;
