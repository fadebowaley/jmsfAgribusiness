import {Phone} from 'lucide-react';

const Banner = () => {
  return (
    <section className='bg-[#F2F2F2] w-full px-10'>
        <div className="flex justify-center bg-green-600 text-white pb-4">
        <div className='w-1/2 flex'>
            <img
            src="/banner.jpg"
            alt="Banner Background"
            className="w-full h-full object-fit"
            style={{
                clipPath: 'polygon(0 100%, 0 0, 50% 0%, 80% 100%)',          
             }}
        />
        </div>
        
        <div className=" p-4 md:p-4 rounded-lg flex flex-col items-center justify-center space-y-2">
            <h2 className="text-xl md:text-2xl font-bold">Need Expert Advisory?</h2>
            <div className="text-lg md:text-xl font-medium max-w-[300px] bg-white text-green-600 px-4 py-2 rounded-full">
                <Phone className="inline-block mr-2" />
                <a href="tel:+2348129460848" className="hover:underline text-black">
                (+234) 812-946-0848
                </a>
            </div>
        </div>
    </div>
    </section>
    
  );
};

export default Banner;