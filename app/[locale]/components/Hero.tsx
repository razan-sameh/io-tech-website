"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/avatar.png",
    bgImage: "/hero1.png",
  },
  {
    title: "Innovate with Us",
    desc: "We deliver quality and precision to help your business grow.",
    image: "/avatar.png",
    bgImage: "/hero1.png",
  },
  {
    title: "Empowering Ideas",
    desc: "We help turn your vision into reality with technology and creativity.",
    image: "/avatar.png",
    bgImage: "/hero1.png",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={slides[index].bgImage}
        alt={slides[index].title}
        fill
        className="object-cover brightness-50"
      />

      {/* Content */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-8 md:px-16 text-center md:text-left gap-10"
      >
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">{slides[index].title}</h1>
          <p className="mb-6 text-lg">{slides[index].desc}</p>
          <button className="bg-white text-[#3b2416] px-6 py-3 rounded hover:bg-gray-200 transition">
            Read More
          </button>
        </div>

        {/* Image Section (Right side) */}
        <div className="flex justify-center md:justify-end flex-1">
          <Image
            src={slides[index].image}
            alt="Decorative Icon"
            width={220}
            height={220}
            className="shadow-lg"
          />
        </div>
      </motion.div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-black/60 p-3 rounded-full z-20"
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-black/60 p-3 rounded-full z-20"
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>

      {/* Bullets (numbers or dots) */}
      <div className="absolute bottom-40 left-6 flex flex-col gap-3 z-20 p-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
