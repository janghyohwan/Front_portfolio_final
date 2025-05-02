"use client";

import { defaultCards } from "@/data/ProjectData";
import { ProjectProps } from "@/types/ProjectType";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const ProjectSection: React.FC<ProjectProps> = ({
  cards = defaultCards,
  sectionId = "projects",
  title = "Project",
}) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 모든 고유 태그 추출 및 React 태그를 두 번째 줄로 이동
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    cards.forEach((card) => card.tags.forEach((tag) => tagsSet.add(tag)));
    const tagsArray = Array.from(tagsSet);
    const reactIndex = tagsArray.indexOf("React");
    if (reactIndex > -1) {
      tagsArray.splice(reactIndex, 1);
    }
    return tagsArray;
  }, [cards]);

  // 선택된 태그에 따라 카드 필터링
  const filteredCards = useMemo(() => {
    if (!selectedTag) return cards;
    return cards.filter((card) => card.tags.includes(selectedTag));
  }, [cards, selectedTag]);

  // 태그를 두 줄로 나누기
  const halfLength = Math.ceil(allTags.length / 2);
  const firstRowTags = allTags.slice(0, halfLength);
  const secondRowTags = ["React", ...allTags.slice(halfLength)];

  return (
    <section id={sectionId} className="py-16 bg-black scroll-mt-16">
      <div className="max-w-[1800px] mx-auto px-4 mb-8">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-[70px] font-bold uppercase text-center mb-8 bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="hidden lg:flex flex-col gap-4 w-full">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 bg-gray-200 text-gray-800 rounded ${
                  selectedTag === null ? "bg-red-600 text-white" : ""
                }`}
              >
                #all
              </button>
              {firstRowTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 bg-gray-200 text-gray-800 rounded ${
                    selectedTag === tag ? "bg-red-600 text-white" : ""
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {secondRowTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 bg-gray-200 text-gray-800 rounded ${
                    selectedTag === tag ? "bg-red-600 text-white" : ""
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:hidden flex justify-end w-full">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-64 h-full bg-black p-4 z-50 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setSelectedTag(null);
                setIsMenuOpen(false);
              }}
              className={`px-4 py-2 bg-gray-200 text-gray-800 rounded ${
                selectedTag === null ? "bg-red-600 text-white" : ""
              }`}
            >
              #all
            </button>
            {[...firstRowTags, ...secondRowTags].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 bg-gray-200 text-gray-800 rounded ${
                  selectedTag === tag ? "bg-red-600 text-white" : ""
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-[1800px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg"
            >
              {card.imageLink ? (
                <a
                  href={card.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={600}
                    height={300}
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                  />
                </a>
              ) : (
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={600}
                  height={300}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                />
              )}
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {card.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 md:px-4 py-1 md:py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm md:text-base"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
