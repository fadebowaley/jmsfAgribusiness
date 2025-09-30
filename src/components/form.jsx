import React from "react";

function Form() {
  return (
    <>
    <form
  action=""
  method="post"
  className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
>
  <h2 className="mb-10 mt-5 text-3xl font-bold">
    <span className="border-b-4 border-[#1fa12e] pb-1">Send</span> Us Message
  </h2>

  <div className="grid md:grid-cols-2 gap-5 mb-5">
    <input
      type="text"
      name="Name"
      placeholder="Name*"
      required
      className="border border-gray-300 w-full p-3 rounded-full outline-none focus:ring-2 focus:ring-green-400"
    />
    <input
      type="email"
      name="Email"
      placeholder="Email*"
      required
      className="border border-gray-300 w-full p-3 rounded-full outline-none focus:ring-2 focus:ring-green-400"
    />
  </div>

  <div className="grid md:grid-cols-2 gap-5 mb-5">
    <input
      type="text"
      name="Subject"
      placeholder="Subject*"
      required
      className="border border-gray-300 w-full p-3 rounded-full outline-none focus:ring-2 focus:ring-green-400"
    />
    <input
      type="tel"
      name="Phone"
      placeholder="Phone*"
      required
      className="border border-gray-300 w-full p-3 rounded-full outline-none focus:ring-2 focus:ring-green-400"
    />
  </div>

  <textarea
    name="Message"
    placeholder="Message"
    rows="5"
    className="border border-gray-300 w-full p-3 rounded-2xl outline-none focus:ring-2 focus:ring-green-400 mb-5"
  ></textarea>

  <button
    type="submit"
    className="bg-[#1fa12e] hover:bg-green-700 transition w-full md:w-[200px] rounded-full px-4 py-3 flex items-center justify-center gap-2 text-white"
  >
    <i className="fas fa-arrow-right text-xl"></i>
    SEND MESSAGE
  </button>
</form>

    </>
  );
}

export default Form;
