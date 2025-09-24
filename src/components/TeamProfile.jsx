
// export default TeamProfile;
import Navbar from '../components/Navigation'
import Footer from '../components/Footer'

import { useParams } from "react-router-dom";
import teamData from '../components/TeamData'; // Adjust path as needed
import Hero from "../components/Hero";

function TeamProfile() {
  const { name } = useParams(); // e.g., 'robert-smith'

  // Find the team member based on URL parameter
  const member = teamData.find(
    (member) => member.link === `/team/${name}`
  );

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <>
    <header>
            <nav className="fixed top-0 right-0 left-0 z-[9999]">
              <Navbar />
              </nav>
            </header>
      <div className="relative mt-37 sm:mt-72 md:mt-50">
        <Hero title="Our Team" bgImage="/images/hero/blog.jpg" />

        <h1 className="absolute top-[20%] p-4 text-white text-5xl font-[800]">
          {member.name}
        </h1>
        <h2 className="absolute bottom-0 p-4 ml-4 rounded-t-[7px] bg-[#1fa12e]">
          <span className="text-white opacity-[0.6]">
            Greenova - Team Members - {member.role} -
          </span>
          <span className="opacity-[1] text-white">{member.name}</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:w-full p-4 md:px-10 md:gap-7 lg:px-40 md:items-start">
        <div className="">
          <img src={member.img} className="w-[100%]" alt={member} />
          <div className="my-5 flex gap-2">
            <a href="#">
              <i className="fab fa-facebook-f hover:bg-white hover:text-[#1fa12e] bg-[#1fa12e] px-4 py-3 text-white rounded-[5px]"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter hover:bg-white hover:text-[#1fa12e] bg-[#1fa12e] px-3 py-3 text-white rounded-[5px]"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in hover:bg-white hover:text-[#1fa12e] bg-[#1fa12e] px-3 py-3 text-white rounded-[5px]"></i>
            </a>
            <a href="#">
              <i className="fab fa-google hover:bg-white hover:text-[#1fa12e] bg-[#1fa12e] px-3 py-3 text-white rounded-[5px]"></i>
            </a>
          </div>
          <div>
            <p className="flex gap-3 items-center pb-3">
              <i className="fa fa-map-marker-alt text-[#1fa12e]"></i>
              <span className="opacity-[0.8]">{member.location}</span>
            </p>
            <p className="flex gap-3 items-center pb-3">
              <i className="fa fa-phone text-[#1fa12e]"></i>
              <span className="opacity-[0.8]">{member.phoneNumber}</span>
            </p>
            <p className="flex gap-3 items-center pb-3">
              <i className="far fa-envelope text-[#1fa12e]"></i>
              <span className="opacity-[0.8]">{member.mail}</span>
            </p>
            <p className="flex gap-3 items-center">
              <i className="fa fa-phone text-[#1fa12e]"></i>
              <span className="opacity-[0.8]">{member.workNumber}</span>
            </p>
          </div>
        </div>
        <div>
          <h2 className="mt-10 md:mt-0 mb-3 font-bold text-4xl opacity-[0.8]">
            {member.name}
          </h2>
          <h3 className="text-2xl font-[600] opacity-[0.9]">
            <span className="border-b border-b-[4px] pb-2 border-b-[#1fa12e]">
              {member.role.slice(0,3)}
            </span>
            <span>{member.role.slice(3)}</span>
          </h3>
          <p className="mt-10 opacity-[0.7] text-[15px] md:text-[14px]">
            {member.description}
          </p>
        </div>
      </div>
        <footer className="">
        <Footer />
        </footer>
    </>
  );
}

export default TeamProfile;
