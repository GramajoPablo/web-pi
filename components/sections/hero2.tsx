'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className=" w-full ">
      {/* Background image container with overlay */}
      <div className="absolute inset-0 z-0 ">
        <img
          src="/practicing-cpr-first-aid.jpg"
          alt="Background"
          className="w-full h-full object-cover scale-x-[-1] min-h-[80vh]"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-[80vh] w-full max-w-7xl mx-auto px-4 py-16 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-12">
          {/* Badge */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2"
          >
             
            <img src="/PI-Logo.png" alt="Logo" className="w-36 lg:w-48" />
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
          >
            Consultora en
            Prevención de Riesgos
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-gray-200 text-lg lg:text-xl"
          >
            Nuestra empresa se especializa en ofrecer soluciones integrales para la
gestión de riesgos, garantizando la protección y el desarrollo estratégico
de su organización.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button 
              whileHover={{ x: 5, backgroundColor: '#22c55e' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium flex items-center gap-2"
            >
             Whatsapp
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ x: 5, backgroundColor: '#3215a5eb' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3   bg-blue-950 border-white text-white rounded-lg font-medium flex items-center gap-2"
            >
              Capacitaciones
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
