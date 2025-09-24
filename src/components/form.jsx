import React from "react";

function Form() {
  return (
    <>

        <div className="md:w-[50%]">
          <h2 className="mb-[40px] mt-[20px] text-3xl font-bold">
            <span className="border-b border-b-[#1fa12e] pb-[3px] border-b-[3px]">
              Sen
            </span>
            d Us Message
          </h2>
          <form action="" method="post">
            <div className="md:flex md:gap-5">
              <input
                type="text"
                name="Name"
                placeholder="Name*"
                required
                className="border border-[#d6d6d6] block w-full p-3 rounded-[5px] mb-[20px] outline-none"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email*"
                required
                className="border border-[#d6d6d6] block w-full p-3 rounded-[5px] mb-[20px] outline-none"
              />
            </div>
            <div className="md:flex md:gap-5">
              <input
                type="text"
                name="Subject"
                placeholder="Subject*"
                required
                className="border border-[#d6d6d6] block w-full p-3 rounded-[5px] mb-[20px] outline-none"
              />
              <input
                type="tel"
                name="Phone"
                placeholder="Phone*"
                required
                className="border border-[#d6d6d6] block w-full p-3 rounded-[5px] mb-[20px] outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              className="border border-[#d6d6d6] block w-full p-1  rounded-[5px] mb-[20px] outline-none"
              rows="5"
            ></textarea>
          </form>
          <div
            id="form"
            className="bg-[#1fa12e] w-[200px] rounded-[30px] px-4 py-3 flex gap-[10px]"
          >
            <i className="fas fa-arrow-right text-2xl text-white" id="span"></i>
            <button
              type="submit"
              className="cursor-pointer text-white"
              id="button"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      
    </>
  );
}
export default Form;