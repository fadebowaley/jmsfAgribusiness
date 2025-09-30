import React from "react";
function Info() {
  return (
    <div className="md:w-[300px] border border-[#d6d6d6] font-['Roboto'] flex flex-col p-0">
      <div className="border-b p-[24px] border-b-[#d6d6d6] rounded-[5px] gap-[30px] flex md:items-start  items-center justify-between ">
        <div>
          <h3 className="mb-[10px] text-left font-bold text-2xl">Address</h3>
          <p className="text-[16px] font-[400] leading-7 text-justify text-[#524b48] md:text-[14px]">
            Suite 12, Candizelux Plaza, Kubwa Road, FCT Abuja, Nigeria
          </p>
        </div>
        <i className="fas fa-map-marker-alt text-[#1fa12e] text-[24px]"></i>
      </div>
      <div className="border-b p-[24px] border-b-[#d6d6d6] gap-[40px] flex  items-center md:items-start justify-between ">
        <div>
          <h3 className="mb-[10px] text-left font-bold text-2xl">Email</h3>
          <p className="text-[16px] font-[400] text-[#524b48] leading-7 text-justify">
            info@jmsfagribusiness.com
          </p>
        </div>
        <i className="far fa-envelope text-[#1fa12e] text-[24px]"></i>
      </div>
      <div className="border-b p-[24px] border-b-[#d6d6d6] gap-[40px] flex md:items-start items-center justify-between ">
        <div>
          <h3 className="mb-[10px] text-left font-bold text-2xl">Phone</h3>
          <p className="text-[16px] leading-7 text-justify text-[#524b48]">
            +234-812-946-0848
          </p>
        </div>
        <i className="fas fa-phone-alt rotate-[90deg] text-[#1fa12e] text-[24px]"></i>
      </div>
      <div className="p-[24px] gap-[40px] flex  items-center justify-between ">
        <div>
          <h3 className="mb-[10px] text-left font-bold text-2xl">Find Us On</h3>
          <p className="flex gap-[10px]">
            <a
              href="http://facebook.com/jmsfagribiz"
              target="_blank"
              className="bg-white inline-block border px-[10px] hover:text-white text-[#1fa12e] rounded-[5px] hover:bg-[#1fa12e] py-[4px] border-[#1fa12e]"
            >
              <i className="fab fa-facebook-f  "></i>
            </a>
            <a
              href="http://twitter.com/jmsfagribiz"
              target="_blank"
              className="bg-white inline-block border px-[7px] hover:text-white text-[#1fa12e] rounded-[5px] hover:bg-[#1fa12e] py-[4px] border-[#1fa12e]"
            >
              <i className="fax fa-twitter  "></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-white inline-block border px-[7px] hover:text-white text-[#1fa12e] rounded-[5px] hover:bg-[#1fa12e] py-[4px] border-[#1fa12e]"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="http://instagram.com/jmsfagribiz"
              target="_blank"
              className="bg-white inline-block border px-[7px] hover:text-white text-[#1fa12e] rounded-[5px] hover:bg-[#1fa12e] py-[4px] border-[#1fa12e]"
            >
              <i className="fab fa-instagram "></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Info;