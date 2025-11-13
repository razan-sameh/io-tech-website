"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import Container from "@/components/Container";

const team = [
  { name: "John Doe", role: "CEO", img: "/avatar.png" },
  { name: "Jane Smith", role: "Designer", img: "/avatar.png" },
  { name: "Alex Brown", role: "Developer", img: "/avatar.png" },
  { name: "Emily White", role: "Marketing", img: "/avatar.png" },
  { name: "Michael Green", role: "Manager", img: "/avatar.png" },
];

export default function Team() {
  return (
    <section className="py-16 text-center bg-background">
      <Container>
        <h2 className="text-3xl font-semibold mb-4 text-title">Our Team</h2>
        <p className="text-lightContent mb-10 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {team.map((member, i) => (
            <SwiperSlide key={i} className="flex flex-col items-center">
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
              />
              <h3 className="mt-4 font-semibold text-title">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
