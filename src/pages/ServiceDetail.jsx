import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import MainNav from '../components/MainNav';

const serviceData = {
  'agricultural-advisory': {
    title: 'Agricultural Advisory',
    image: '/agricAdvisory.png',
    content: `We deliberately analyse the value chain of the investment to understand the gaps and provide smart, sustainable, and impactful solutions. Our goal is to enhance the market system for both investors and beneficiaries through evidence-based strategies and execution support across all agricultural verticals.`,
  },
  'agro-tourism': {
    title: 'Agro‑Tourism',
    image: '/agroTourism.png',
    content: `Hospitality and recreation *do* thrive in farm environments — if you know what the fuck you're doing. We fuse agriculture with immersive guest experiences that leave lifelong impressions, while helping operators maximize the economic and cultural value of nature-centric tourism.`,
  },
  'commodity-trading': {
    title: 'Commodity Trading, Value Chain & Market Development',
    image: '/marketDevelopment.png',
    content: `We offer sustainable, market-driven development services across commodity trading, exports, and full-spectrum agricultural value chains. Whether you're an institutional investor or a hungry-as-hell local trader — we help you build profitable, scalable ventures in Nigeria’s agricultural ecosystem.`,
  },
  'training-provision': {
    title: 'Training Provision',
    image: '/trainingProvision.png',
    content: `Systemic change doesn’t happen with fucking spreadsheets — it happens through bold, disruptive training. We build capacity that breaks cycles, sparks innovation, and arms people with the tools to flip stagnant market structures into dynamic growth machines.`,
  },
  'renewable-energy-environmental-waste': {
    title: 'Renewable Energy, Environmental & Waste Management',
    image: '/renewableEnergy.png',
    content: `Agriculture is nothing without sustainability. We provide integrated solutions for renewable energy, waste management, and environmental conservation. Our services help clients cut through inefficiency and reduce environmental impact without sacrificing operational scale.`,
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) return (
    <div className="p-10 text-center text-red-600 font-bold text-lg">
      Service not found. Go fix your damn URL.
    </div>
  );

  return (
    <>
      <MainNav />
      <Hero title={service.title} bgImage={service.image} />

      <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
        <div className="mb-10">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        <article className="bg-white p-8 shadow-lg rounded-lg leading-relaxed text-lg border border-gray-100">
          <p>{service.content}</p>
        </article>
      </section>
    </>
  );
};

export default ServiceDetail;
