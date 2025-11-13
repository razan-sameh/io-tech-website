"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "@/components/Container";

const testimonials = [
  {
    name: "Mohammed Saif",
    role: "CEO, Company",
    text: "With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered.",
    image: "/avatar.png",
  },
  {
    name: "Sara Ahmed",
    role: "Marketing Director, XYZ",
    text: "Working with this team was an excellent experience. They truly care about delivering quality and innovation.",
    image: "/avatar.png",
  },
  {
    name: "John Doe",
    role: "Investor",
    text: "Professional, dedicated, and always ahead of schedule. Highly recommended for business growth projects.",
    image: "/avatar.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-primary text-white py-16">
      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left">
          What our clients are saying
        </h2>

        <p className="max-w-3xl mx-auto md:mx-0 mb-10 text-lightContent text-center md:text-left">
          Our clients range from individual investors, to local, international
          as well as Fortune 500 companies. Our clients range from individual
          investors, to local, international as well as Fortune 500 companies.
        </p>

        <div className="flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 lg:gap-12"
            >
              <div className="shrink-0">
                <Image
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  width={400}
                  height={400}
                  className="w-40 sm:w-48 md:w-56 lg:w-72 xl:w-80 h-auto object-cover"
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 text-lightContent leading-relaxed">
                  &quot;{testimonials[index].text}&quot;
                </p>
                <h4 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {testimonials[index].name}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex gap-4 justify-center md:justify-end mt-4">
            <button
              onClick={prevSlide}
              disabled={index === 0}
              className={`p-3 sm:p-4 rounded-full shadow-lg transition 
      ${
        index === 0
          ? "bg-gray-200/20 text-gray-200/20 cursor-not-allowed"
          : "bg-secondary text-white hover:bg-white hover:text-primary"
      }`}
              aria-label="Previous Testimonial"
            >
              <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              disabled={index === testimonials.length - 1}
              className={`p-3 sm:p-4 rounded-full shadow-lg transition 
      ${
        index === testimonials.length - 1
          ? "bg-gray-200/20 text-gray-200/20 cursor-not-allowed"
          : "bg-secondary text-white hover:bg-white hover:text-primary"
      }`}
              aria-label="Next Testimonial"
            >
              <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
