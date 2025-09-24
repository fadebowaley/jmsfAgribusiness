import { Award, User, Heart, Flower2 } from 'lucide-react';

const Project = () => {
  return (
    <section className="py-12 px-19 sm:px-10 lg:px-10 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-lg md:text-lg font-semibold text-green-500 text-center mb-4">Work We Have Done</h1>
        <h2 className="text-xl md:text-3xl font-bold font-[Poppins] text-center mb-12">Our Feature Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-green-600 text-white">
          {/* Projects Done */}
          <div className="border-1 border-white flex space-x-5 px-4 py-10 text-center justify-center items-center text-xl">
            <User className="w-15 h-15" />
            <div className="justify-center gap-2">
              <div className="text-4xl font-bold">445</div>
              <span>Projects Done</span>
            </div>
          </div>
          
          {/* Expert Advisory */}
          <div className=" border-1 border-white flex space-x-5 px-6 py-10 justify-center items-center text-center text-xl">
            <Flower2 className="w-15 h-15" />
            <div className="justify-center gap-2">
              <div className="text-4xl font-bold">1023</div>
              <span>Expert Advisory</span>
            </div>
          </div>
          
          {/* Happy Clinics */}
          <div className="border-1 border-white flex space-x-5 px-6 py-10 justify-center items-center text-center text-xl">
            <Heart className="w-15 h-15" />
            <div className="justify-center gap-2">
              <div className="text-4xl font-bold">553</div>
              <span>Happy Clients</span>
            </div>
          </div>
          
          <div className="border-1 border-white flex space-x-5 px-6 py-10 justify-center items-center text-center text-xl">
            <Award className="w-15 h-15" />
            <div className="justify-center gap-2">
              <div className="text-4xl font-bold">7</div>
              <span>Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;