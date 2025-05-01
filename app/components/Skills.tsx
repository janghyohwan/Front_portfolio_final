"use client";
import { cardData } from "@/data/SkillData";
import { CardData } from "@/types/SkillType";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SkillSection = () => {
  const pages: CardData[][] = [
    cardData.slice(0, 4),
    cardData.slice(4, 8),
    cardData.slice(8, 12),
  ];

  const [page, setPage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const handleNext = () => setPage((p) => Math.min(p + 1, pages.length - 1));
  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));

  useEffect(() => {
    if (!isPlaying) return;
    const intervalId = setInterval(() => {
      setPage((p) => (p + 1) % pages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [pages.length, isPlaying]);

  return (
    <div id="skills" className="relative h-screen py-16">
      <div className="absolute top-0 left-0 right-0 text-center pt-8">
        <h2 className="text-5xl font-bold bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          SKILLS
        </h2>
      </div>
      <div className="max-w-[1200px] mx-auto relative mt-[100px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={page}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1.0 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) handleNext();
              else if (info.offset.x > 50) handlePrev();
            }}
            className="grid grid-cols-2 grid-rows-2 gap-8"
          >
            {pages[page].map((card) => (
              <div key={card.title} className="group perspective">
                <div className="relative w-full h-[300px] transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center p-6 backface-hidden">
                    <span className="text-white text-4xl font-bold">
                      {card.title}
                    </span>
                  </div>
                  <div className="absolute w-full h-full bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <span className="text-white text-2xl text-center">
                      {card.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
