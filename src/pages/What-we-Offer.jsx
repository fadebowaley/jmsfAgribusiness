import MainNav from "../components/MainNav";
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function WhatWeOffer() {
    const offers = [
        'Agricultural Advisory',
        'Agro-Tourism',
        'Commodity Training',
        'Value Chain Development',
        'Training Provision',
        'Renewable Energy,Environment & Waste Management',
    ];

    return(
        <>
        <MainNav />
        <Hero title="What We Offer" bgImage="/images/hero/blog.jpg" />
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.p 
                className="text-gray-600 font-semibold max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0, y: -30 }} 
                animate={{ opacity: 1, y: 0 }} 
                >
                    At JMSF Agribusiness, we offer tailored services to meet the growing needs of investors, institutions and individuals in the agricultural sector.
                </motion.p>
                <p >
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((item, i) => (
                    <motion.div 
                    key={item} 
                    className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i * 0.1 }}
                    >
                    <CheckCircle className="text-green-600" />
                    <span className="text-gray-800 font-medium">{item}</span>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default WhatWeOffer;

