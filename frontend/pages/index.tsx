import { useCallback, useEffect, useState } from "react";

import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";

import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import { motion } from "framer-motion";

import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [screenHeight, setScreenHeight] = useState(0);

  const handleScreenResize = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);
  //#region ------ Particles ------
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 1000 },
      },
      color: {
        value: ["#969696"],
      },

      line_linked: {
        enable: true,
        distance: 90,
        color: "#c8c8c8",
        opacity: 0.4,
        width: 1,
      },
      size: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1.181158184520175,
          size_min: 0.8,
          sync: true,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        out_mode: "out",
      },
    },

    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 0.2 } },
      },
    },
  };
  //#endregion
  return (
    <div className=" text-gray-500 h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#C69400]/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 3 }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="fixed inset-0 z-0"
          options={particlesOptions}
        />
      </motion.div>

      <Head>
        <title>TC. Lin</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-start">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience screenHeight={screenHeight} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills screenHeight={screenHeight} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <footer className="absolute bottom-0 right-0">
        <div className="flex items-center justify-end">
          <Link href="#hero" className="cursor-default py-2">
            <ArrowUpIcon className="h-10 w-10 mr-4 filter grayscale hover:grayscale-0 cursor-pointer object-cover border rounded-full p-2" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
