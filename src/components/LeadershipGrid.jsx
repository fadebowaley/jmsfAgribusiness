// import React from "react";
// import Overlay from "./overlay";
// import TeamLinks from "./teamLInks";
// import ToluImage from "../assets/tolu1.png";
// import Richard from "../assets/richard.png";
// import Abisola from "../assets/abisola.jpeg";
// import John from "../assets/john.png";

// function TeamGrid() {
//   return (
//     <>
//       <p className="mt-9 text-[20px] opacity-[0.7] font-['Roboto'] font-medium text-center max-w-3xl mx-auto">
//         We have dedicated team players who bring energy, ideas, and pride to
//         their work. Each member of our team is a specialist in their field.
//         Together, we make sure you’re investing where the best returns are
//         while building loyalty across every touchpoint.
//       </p>

//       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
//         {[
//           {
//             id: "holder1",
//             img: ToluImage,
//             name: "Tolu Kuku",
//             role: "Project Manager",
//             alt: "Manager Tolu Kuku",
//           },
//           {
//             id: "holder2",
//             img: Richard,
//             name: "Richard Ogundele",
//             role: "MD/CEO",
//             alt: "MD Richard",
//           },
//           {
//             id: "holder3",
//             img: Abisola,
//             name: "Abisola Grace Ilufoye",
//             role: "Business Development and Corporate Communications Manager",
//             alt: "Manager Abisola",
//           },
//           {
//             id: "holder4",
//             img: John,
//             name: "John Lampan",
//             role: "Technical Director",
//             alt: "Director John",
//           },
//         ].map(({ id, img, name, role, alt }) => (
//           <div key={id} className="flex flex-col items-center text-center">
//             <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg group">
//               <a href="#">
//                 <img
//                   src={img}
//                   loading="lazy"
//                   alt={alt}
//                   className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
//                 />
//               </a>
//               <Overlay />
//             </div>
//             <h4 className="text-[22px] font-bold mt-5">{name}</h4>
//             <p className="opacity-70 text-[15px] font-medium mt-1 mb-5 px-4">
//               {role}
//             </p>
//             <div className="flex justify-center items-center gap-4">
//               <TeamLinks />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default TeamGrid;
import React, { useState } from "react";
import Overlay from "./overlay";
import TeamLinks from "./teamLInks";
import ToluImage from "../assets/tolu1.png";
import Richard from "../assets/richard.png";
import Abisola from "../assets/abisola.jpeg";
import John from "../assets/john.png";
import TeamModal from "./TeamModal";

function TeamGrid() {
  const [showRichardModal, setShowRichardModal] = useState(false);

  const richardBio = (
    <>
      <p>
        Richard Ogundele and GEMS4 have received the Centre for Values in Leadership (CVL) Agric Sector Legend Award and the Achiever in Agriculture Award from the Nigeria Agriculture Awards (NAA).
      </p>
      <p>
        These awards recognize his leadership in promoting Good Handling Practices for Perishable Produce and for driving growth and employment across Nigeria’s agricultural value chain.
      </p>
      <p>
        Through GEMS4, funded by DFID/UKaid and The World Bank, Richard has empowered smallholder farmers and micro retailers, linked tomato farmers to processors, improved post-harvest infrastructure, and helped shape national horticulture operations.
      </p>
      <p>
        His work has directly contributed to job creation for 10,000 Nigerians and income increases for 500,000 more — setting the gold standard for agricultural market development.
      </p>
    </>
  );

  return (
    <>
      <p className="mt-9 text-[20px] opacity-[0.7] font-['Roboto'] font-medium text-center max-w-3xl mx-auto">
        We have dedicated team players who bring energy, ideas, and pride to their work. Each member of our team is a specialist in their field. Together, we make sure you’re investing where the best returns are while building loyalty across every touchpoint.
      </p>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {/* Tolu */}
        <TeamCard img={ToluImage} name="Tolu Kuku" role="Project Manager" />
        
        {/* Richard with modal */}
        <div className="flex flex-col items-center text-center">
          <div
            className="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => setShowRichardModal(true)}
          >
            <img
              src={Richard}
              alt="Richard Ogundele"
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
            />
     <div className="absolute w-[100%] md:w-[100%] inset-0 bg-[#1fa12e] opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
   <span className="text-white text-sm font-semibold tracking-wide">Click to view achievement</span>
  </div>
          </div>
          <h4 className="text-[22px] font-bold mt-5">Richard Ogundele</h4>
          <p className="opacity-70 text-[15px] font-medium mt-1 mb-5 px-4">MD/CEO</p>
          <div className="flex justify-center items-center gap-4">
            <TeamLinks />
          </div>
        </div>

        {/* Abisola */}
        <TeamCard img={Abisola} name="Abisola Grace Ilufoye" role="Business Development and Corporate Communications Manager" />

        {/* John */}
        <TeamCard img={John} name="John Lampan" role="Technical Director" />
      </div>

      {/* Modal for Richard */}
      <TeamModal
        isOpen={showRichardModal}
        onClose={() => setShowRichardModal(false)}
        name="Richard Ogundele"
        role="MD/CEO"
        content={richardBio}
      />
    </>
  );
}

// Reusable card
function TeamCard({ img, name, role }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg group">
        <img
          src={img}
          loading="lazy"
          alt={name}
          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
        />
        <Overlay />
      </div>
      <h4 className="text-[22px] font-bold mt-5">{name}</h4>
      <p className="opacity-70 text-[15px] font-medium mt-1 mb-5 px-4">{role}</p>
      <div className="flex justify-center items-center gap-4">
        <TeamLinks />
      </div>
    </div>
  );
}

export default TeamGrid;
