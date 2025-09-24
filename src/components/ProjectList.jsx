import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

const projects = [
  {
    name: "Survey of Medium to Large-Scale Agribusinesses in Nigeria",
    dates: "October 2018 - April 2019",
    client: "AFOS Foundation",
    brief: "An in-depth study on agribusinesses in Nigeria to understand their activities and engage with them to develop agriculture value chains through a combination of capacity building interventions and facilitating linkages between value chain actors and finacial service providers. 84 respondents were interviewed across agribusiness, development agencies, government and farmer groups in 7 locations. Quantitative and qualitative datasets were extensively utilized",
    contact: "Ladi Akoni, Program Manager",
    email: "akoni@afos.ng",
    phone: "09033122969",
  },
  {
    name: "Operationalizing the Inter-Ministerial Agriculture Nutrition Working Group(IANWG)",
    dates: "November 2018 - December 2018",
    client: "GAIN PLAN",
    brief: "An in-depth study on the inter-Ministerial Agriculture Nutrition Working Group(IANWG) of the Federal Ministry of Agriculture and Rural Development to undertand why the working group failed to deliver on its mandate to aid the improvement of nutrition outcomes in Nigeria. The Study was carried out by interviewing 18 respondents aided by pretested questionnaires that contain comprehensive question areas which covered all aspects of the IANWG proposed operations and the desk review of IANWG documents to understand where facult lines occurred in its past. The Study utilised more of qualitative datasets ",
    contact: "Adeyinka Onabolu PhD, Senior Advisor on Food Security & Nutrition to the Honourable Minister of Agriculture",
    email: "adeyinkaonabolu@yahoo.com",
    phone: "+2348034002756",
  },
  {
    name: "Landscape Analysis of the Current Tomato Processing Methods, Technologies, and Packaging Material Types in Nigeria",
    dates: "March 2018 - April 2018",
    client: "GAIN PLAN",
    brief: "An in-depth study to conduct a review of tomato processing technologies in Nigeria and where the processing is generally occurring; conduct a review of tomato processing, preservation and packaging technologies developed by the relevant National Agricultural Research Institutes (NARIs) and rank their suitability and scalability for commercialization by MSMEs; Identify among the processing technologies for tomato which ones cna be adopted as proximate processing models for MSMEs and conduct a review of the size of the market for locally processed tomato products sold as ingredients for other processed food products, or for direct consumption through supermarkets, or institutions and open markets. The Study utilized a large amount of quantitative data",
    contact: "Dr.Augustine Okoruwa, Senior Project Manager",
    email: "aokoruwa@gainhealth.org",
    phone: "+2348035052634",
  },
  {
    name: "Source of Growth in Agribusiness Small and Medium-Sized Enterprises(SMEs): A comparative Analysis of Cassava, Cashew, Poultry and Rice Value Chains between Vietnam and Nigeria",
    dates: "December 2019 - June 2020",
    client: "THE WORLD BANK GROUP",
    brief: "An indebt study to review the cassava, rice, poultry and cashew value chains via a comparative value chain analysis methodology between Vietnam and Nigeria to ascertain level of competitiveness in both countries. Key lessons are expected to be shared between both nations for internal support and development of small and medium sized agribusinesses in Nigeria especially.",
    contact: "Dr.Elliot W.Mghenyi, Senior Agricultural Economist",
    email: "emghenyi@worldbank.org",
    phone: "+2348100210274 and +12022470096",
  },
  {
    name: "Livelihood Enhancement Training for Nigerian Small holder farmers for AFOS foundation Nigeria, targeting 10,000 farmers in Sesame, Maize, Soybean and Poultry.",
    dates: "November 2021 - October 2024",
    client: "THE AFOS FOUNDATION",
    brief: "Capacity building of Nigeria-Small holder Farmers to improve yield and profitability amongst them. This is to improve their livelihoods and finances to ensure they do better than they are usually known to do economically. It entailed training in Good Agriculture Practices (GAP), Financial literacy and Farmer Business School (FBS) and Group Formation, Access to Markets and Finance",
    contact: "Moses Olatunji, Project Coordinator AFOS livelihood Enhancement Training Programmer for small Holders Farmers",
    email: "olatunji@afos.ng",
    phone: "+2348139570612",
  },
  {
    name: "Tomato Industry Position Papers: Adopting a Market Oriented Policy Framework and implementation Approacg to Make the Nigerian Tomato Sector work better for industry players and Stimulate Economic Growth, Value Addition, and Job Creation. November 2021",
    dates: "November 2021",
    client: "JMSF Agribusiness Nigeria",
    brief: "An indebt review of the tomato sector viz-a-viz the plociy direction of the Federal Government of Nigeria towards controlling importation of tomato product due to shortage from internal production and processing. Nigeria being a major player in Africa and globally ought to have a better strategic approach in making the tomato sector work better for all actors especially, Small Holder Farmers. Paper suggested ways and means of making the tomato sector work better for all involved.",
    contact: "Richard Ogundele",
    email: "Richard.ogundele@jmsfagribusiness.com",
    phone: "+2348129460848",
  },
  {
    name: "CAP-F Value Chain Cluster Mapping and Investment Opportunties Database Development for Nigera. November 2021.",
    dates: "November 2021",
    client: "THE AU-NEPAD/GROW AFRICA",
    brief: "An indebt review of the Nigeria Agricultural Investment Plan (NAIP) and the Agricultural Promotion Plan (APP) to identify opportunities for investment and multi-stakeholder platforms(MSPs) within clusters for possible development. Value chains of focus included rice, tomato, soybean, Sorghum, Maize, Oil Palm, Seasame and Wheate",
    contact: "Obinna Igwebuike, Programme Coordinator Grow Africa/Au-NEPAD project",
    email: "o.igwebuike@sawobonang.com",
    phone: "+2348106397244",
  },
  {
    name: "Proposal and Grant Writing Training for Technical Staff of the Milk Value Chain Foundation (MVCF) Nigeria. October 2021.",
    dates: "Octber 2021",
    client: "THE MILK VALUE CHAIN FOUNDATION",
    brief: "Capacity building of senior technical staff of the Milk Value Chain Foundation (MVCF) and its partners CORETS in writing technical proposals for response to grants and requesting for service providers to respond to their calls, as a way of managing their projects better.",
    contact: "Dr. Ishak Bello, Chief Executive Officer (CEO)",
    email: "isbel@arlafoods.com",
    phone: "+2348034501972",
  },
  {
    name: "The Food Loss Initiative Project in Nigeria 2020 by the Danish Embassy Business Desk. August to October 2020.",
    dates: "October 2020",
    client: "THE DANISH EMBASSY BUSINESS DESK",
    brief: "A study to review possible areas of collaboration/support/intervention between Nigeria and Denmark based on cooperation agreement for both countries.",
    contact: "Mr. Poul Erikstrup, Head, Agric Desk, Danish Embassy.",
    email: "pierik@um.dk",
    phone: "+2348066132063",
  },
  {
    name: "Background study of Nigerian Agriculture Landscape for Danish Government Potential Areas of Collaboration with Government of Nigeria. November 2020.",
    dates: "January 2021 - March 2021",
    client: "THE DANISH EMBASSY BUSINESS DESK",
    brief: "Study to review possible areas of collaboration/support/intervention between Nigeria and Denmark based on cooperation agreement for both countries.",
    contact: "Mr.Poul Erikstrup, Head, Agric Desk, Danish Embassy",
    email: "pierik@um.dk",
    phone: "++2348066132063",
  },
  {
    name: "Analysis of policy and recommendation of synthesized document to ensure effective coordination and organization of tomato triangle states TT- comprising of Plateau, Kaduna, Kano, Ilgawa and Katsina states for Technoserve Solutions to Poverty.",
    dates: "August 2019 - February 2020",
    client: "TECHNOSERVE SOLUTIONS TO POVERTY",
    brief: "Review of Tomato Triangle States and relevant Policies to improve the sector in Technoserve project states..",
    contact: "Barrister Femi Oluruntobi",
    email: "aayuba@tns.org, oloruntobi@tns.org",
    phone: "+234 09037810176; 08025914000; 09062873765",
  },
  {
    name: "Management of a 5000 Tomato Farmers Outgrowers project in Kebbi State for Tomani Farms and Agroindustries Nigeria, a subsidiary of GB Foods Africa Nigeria, owners of Gino brand of tomato paste, Bama Mayonnaise and Gino Max paste, to establish a new tomato processing factory of 250mt/day of paste production.",
    dates: "October 2019 - August 2020",
    client: "TOMANI AGRO-INDUSTRIES (THE GB FOODS) Nigeria",
    brief: "An outgrower program for tomato farmers to supply factory and improve livelihoods based on increased yields, revenues, and quality tomatoes for the factory in kebbi's new structure.",
    contact: "Dr.Ted Ng",
    email: "tng@thegbfoods.com",
    phone: "+2348058021258",
  },
  {
    name: "Management of pilot out-grower scheme for farmers in Katsina and Kaduna State for Tomani Farms and Agroindustries Nigeria, a subsidiary of GB Foods Africa Nigeria, owners of Gino brand of tomato paste, Bama Mayonnaise and Gino Max cube, to feed its brand new 30mt tomato paste processing factory in Kaduna.",
    dates: "January - August 2019",
    client: "TOMANI FARMS AND AGRO-INDUSTRIES Nigeria (GB FOODS)",
    brief: "tomato Pilot outgrower program",
    contact: "Dr. Ted Ng",
     email: "tng@thegbfoods.com",
    phone: "+2348058021258",
  }, 
  {
    name: "1. Review of curriculum for improved agronomic practices for tomatoes production in Nigeria for Yieldwise Project Stakeholders managed by Pyxera Global and funded by Rockefeller Foundation. 2. Training on GAP/GHP/Use of plastic crates and agro-processing hubs for Katsina, Kano and Jigawa states for Yieldwise Project Stakeholders managed by Pyxera Global and funded by Rockefeller Foundation.",
    dates: "June 2018 - September 2018",
    client: "THE YIELDWISE PROJECT, PYXERA GLOBAL FUNDED BY ROCKEFELLER FOUNDATION.",
    brief: "A review of curriculum for training of extension agents and farmers in Kano, Katsina and Jigawa states.",
    contact: "Mr. Lekan Tobe Programme Manager",
    email: "ltobe@pyxeraglobal.org",
    phone: "+2348034521177",
  }

];

const truncate = (text) => {
  const firstLine = text.split(/[.!?]/)[0];
  return firstLine.length < text.length ? `${firstLine}.` : text;
};

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 8;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 1, 0] }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 cursor-pointer"
          >
            <h3 className="text-lg font-bold text-green-700">{project.name}</h3>
            <p className="text-sm text-gray-600"><strong>Dates:</strong> {project.dates}</p>
            <p className="text-sm text-gray-600"><strong>Client:</strong> {project.client}</p>
            <p className="text-sm text-gray-600">
              <strong>Brief:</strong> {truncate(project.brief)}{' '}
              <button
                onClick={() => setSelectedProject(project)}
                className="text-green-600 underline text-xs ml-1"
              >
                Show more
              </button>
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-2 pt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-1 text-sm rounded-full ${
              currentPage === i + 1
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => {
              setCurrentPage(i + 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 px-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 max-w-xl w-full space-y-3">
            <Dialog.Title className="text-lg font-bold text-green-700">{selectedProject?.name}</Dialog.Title>
            <p className="text-sm text-gray-700"><strong>Dates:</strong> {selectedProject?.dates}</p>
            <p className="text-sm text-gray-700"><strong>Client:</strong> {selectedProject?.client}</p>
            <p className="text-sm text-gray-700"><strong>Brief:</strong> {selectedProject?.brief}</p>
            <p className="text-sm text-gray-700"><strong>Contact:</strong> {selectedProject?.contact}</p>
            <p className="text-sm text-gray-700"><strong>Email:</strong> {selectedProject?.email}</p>
            <p className="text-sm text-gray-700"><strong>Phone:</strong> {selectedProject?.phone}</p>
            <button
              className="mt-4 px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ProjectList;