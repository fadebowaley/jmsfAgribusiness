
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import teamData from '../components/TeamData'; // Adjust path if needed
import TeamSocial from "../components/TeamSocial";

function TeamGrid() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(visibleCount());
  
  // Function to determine visible cards based on window width
  function visibleCount() {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  const updateVisibleCount = () => {
    setCardsPerView(visibleCount());
  };

  useEffect(() => {
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? teamData.length - cardsPerView : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex + cardsPerView >= teamData.length ? 0 : prevIndex + 1
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     next();
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [cardsPerView]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < cardsPerView; i++) {
      const currentIndex = (index + i) % teamData.length;
      items.push(teamData[currentIndex]);
    }
    return items;
  };

  return (
    <div className="flex flex-col items-center p-4 pt-15 relative">

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-[#1fa12e] text-[#1fa12e] hover:bg-[#1fa12e] hover:text-white p-3"
      >
        <FaChevronLeft />
      </button>

      <div className="flex gap-6 justify-center pb-18 transition-all duration-700">
        {getVisibleItems().map((member, idx) => (
          <div key={idx} className="flex flex-col group items-center">
            <Link to={member.link}>
              <img
                className="rounded-full border group-hover:border-[#1fa12e] border-[12px] border-[white] w-[350px] sm:w-[200px]"
                src={member.img}
                alt={member.name}
              />
            </Link>
            <h3 className="text-2xl font-bold opacity-[0.8] mt-4 mb-2">{member.name}</h3>
            <p className="opacity-[0.7] mb-6">{member.role}</p>
            <TeamSocial />
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-[#1fa12e] text-[#1fa12e] hover:bg-[#1fa12e] hover:text-white p-3"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default TeamGrid;