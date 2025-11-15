"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "@/components/Container";
import { useLocale, useTranslations } from "next-intl";
import { useClient } from "@/lib/hooks/useClient";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const locale = useLocale();
  const isRTL = locale === "ar";
  const { data: testimonials = [], isLoading, error } = useClient();
  const t = useTranslations("testimonials");
  if (isLoading)
    return (
      <section className=" text-white py-16">
        <Container>
          <div className="h-8 w-64 bg-gray-300 rounded mx-auto md:mx-0 mb-4 animate-pulse"></div>
          <div className="h-4 w-96 bg-gray-300 rounded mx-auto md:mx-0 mb-10 animate-pulse"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 animate-pulse">
            {/* Image Skeleton */}
            <div className="w-40 sm:w-48 md:w-56 lg:w-72 xl:w-80 h-40 sm:h-48 md:h-56 lg:h-72 xl:h-80 bg-gray-400 rounded-full"></div>

            {/* Text Skeleton */}
            <div className="flex-1 space-y-4">
              <div className="h-6 sm:h-8 md:h-10 bg-gray-400 rounded w-full"></div>
              <div className="h-6 sm:h-8 md:h-10 bg-gray-400 rounded w-3/4"></div>
              <div className="h-4 sm:h-5 md:h-6 bg-gray-400 rounded w-1/2"></div>
            </div>
          </div>

          {/* Arrows Skeleton */}
          <div className="flex gap-4 justify-center md:justify-end mt-6">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
          </div>
        </Container>
      </section>
    );

  if (error) return <div>Error</div>;

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const isFirst = index === 0;
  const isLast = index === testimonials.length - 1;

  return (
    <section className="bg-primary text-white py-16">
      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center md:text-start">
          {t("title")}
        </h2>

        <p className="max-w-3xl mx-auto md:mx-0 mb-10 text-lightContent text-center md:text-start">
          {t("description")}
        </p>

        <div className="flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 lg:gap-12"
            >
              <div className="shrink-0">
                <Image
                  src={testimonials[index].photo || "/avatar.png"}
                  alt={testimonials[index].name}
                  width={400}
                  height={400}
                  className="w-40 sm:w-48 md:w-56 lg:w-72 xl:w-80 h-auto object-cover"
                  unoptimized
                  preload
                />
              </div>

              <div className="text-center md:text-start flex-1">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 text-lightContent leading-relaxed">
                  &quot;{testimonials[index].comment}&quot;
                </p>
                <h4 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {testimonials[index].name}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                  {testimonials[index].jobTitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex gap-4 justify-center md:justify-end mt-4">
            {/* Previous */}
            <button
              onClick={prevSlide}
              disabled={isFirst}
              className={`p-3 sm:p-4 rounded-full shadow-lg transition 
                ${
                  isFirst
                    ? "bg-gray-200/20 text-gray-200/20 cursor-not-allowed"
                    : "bg-secondary text-white hover:bg-white hover:text-primary"
                }`}
              aria-label="Previous Testimonial"
            >
              <FaChevronLeft
                className={`w-5 h-5 sm:w-6 sm:h-6 ${isRTL ? "rotate-180" : ""}`}
              />
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              disabled={isLast}
              className={`p-3 sm:p-4 rounded-full shadow-lg transition 
                ${
                  isLast
                    ? "bg-gray-200/20 text-gray-200/20 cursor-not-allowed"
                    : "bg-secondary text-white hover:bg-white hover:text-primary"
                }`}
              aria-label="Next Testimonial"
            >
              <FaChevronRight
                className={`w-5 h-5 sm:w-6 sm:h-6 ${isRTL ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
