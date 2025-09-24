import garden from "../assets/garden.png"
function Cta(){
    return (
        <>
        <div className="relative flex flex-col items-center">
  <img className="w-[100%] h-[400px] object-cover relative  top-[-20px]" src={garden}/>
  <div className="absolute   top-[20%]">
  <h2 className="text-3xl text-white lg:text-5xl">Need any Gardening Services?</h2>
  <p className="my-7 text-center text-2xl text-white lg:text-4xl">Call Us Today: + (213)950418</p>
  <a className="inline-block font-bold ml-[40%] py-5 px-7 rounded-[30px] text-white  bg-[#1fa12e]" href="tel:+(213)950418">CONTACT US</a>
  </div>
</div>
        </>
    )
}
export default Cta