
'use client';

import React, { Suspense } from 'react';
import { words } from '../constants/index.js';
import { motion } from 'framer-motion';
import TypewriterEffect from './Typewriter';
import { Canvas } from '@react-three/fiber';
import FloatingElements from './FloatingElements';
import { Stars } from '@react-three/drei';
import { ChevronDown } from 'lucide-react'; 
import { useGSAP } from '@gsap/react';

import gsap from 'gsap';


const Hero = () => {
    useGSAP (() => {
          gsap.fromTo('.hero-text h1',

            {
                y:50,
                opacity:0,
            },
            {
                y:0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'

            },


          )
    })
  return (
    <section id="hero" className="relative h-[670px] w-full bg-black overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={1.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={7000} factor={4} fade speed={2} />
            <FloatingElements />
            {/* <ParticleField /> */}
          </Suspense>
        </Canvas>
       </div>

      {/* Background image overlay (if needed) */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Text Content */}
      <div className="hero-layout relative z-10 flex flex-col justify-center items-start px-5 md:px-20 gap-7">
        <div className="hero-text ">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Shaping
            <span className="slide ml-1 inline-block">
              <span className="wrapper inline-block">
                {words.map((word) => (
                  <span
                    key={word.text}
                    className="flex items-center md:gap-3 gap-1 pb-2"
                  >
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                    />
                    <span>{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">into real projects</h1>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">that deliver results</h1>
                </div>

        <div className="relative w-full h-[48px] sm:h-[56px] md:h-[64px] lg:h-[72px] pointer-events-none">
  <div className="absolute inset-0 flex items-center justify-start text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
    <TypewriterEffect
      strings={[
        "Hi I am Muhammad Ateeb Web Developer",
        "Creative Frontend Developer",
        "React & Next.js Enthusiast",
        "Tailwind CSS Specialist",
        "Building Smooth UIs",
      ]}
    />
  </div>
            </div>

      
     </div>

      {/* Centered Scroll Indicator */}
      <motion.div
  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10"

  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.2 }}
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    className="flex flex-col items-center text-white/60"
  >
    <span className="text-sm mb-2">Scroll to explore</span>
    <ChevronDown size={24} />
  </motion.div>
</motion.div>

    </section>
  );
};

export default Hero;
