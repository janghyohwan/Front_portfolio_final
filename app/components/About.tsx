"use client";
import { AboutData } from "@/data/AboutData";
import { AboutSectionProps } from "@/types/AboutType";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AboutSection: React.FC<AboutSectionProps> = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isVideoEnded) {
      setShowText(true);
      timeoutId = setTimeout(() => {
        setIsVideoEnded(false);
        setShowText(false);
        const video = document.querySelector("video");
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      }, 5000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isVideoEnded]);

  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const splitVariants = {
    initial: {
      width: "0%",
      left: "50%",
    },
    animate: {
      width: "100%",
      left: "0%",
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="relative h-screen flex overflow-hidden bg-black"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src={AboutData().videoSource}
          autoPlay
          muted
          playsInline
          onEnded={() => setIsVideoEnded(true)}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute top-0 h-full bg-black"
          initial="initial"
          animate={isVideoEnded ? "animate" : "initial"}
          variants={splitVariants}
        />
      </div>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <motion.div
          className="text-[55px] font-bold leading-[1.8] text-white space-y-4 text-center"
          initial="hidden"
          animate={showText ? "visible" : "hidden"}
          variants={textVariants}
        >
          {AboutData().titleLines.map((v, i) => (
            <div
              key={i}
              className={
                i === 1 ? "flex items-center gap-6 justify-center" : ""
              }
            >
              <span className={i !== 1 ? "block" : ""}>{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
