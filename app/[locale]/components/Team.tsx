"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import Container from "@/components/Container";
import { useTeam } from "@/lib/hooks/useTeam";

export default function Team() {
  const { data: team, isLoading, error } = useTeam();
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;
  return (
    <section className="py-16 text-center bg-background">
      <Container>
        <h2 className="text-3xl font-semibold mb-4 text-title">Our Team</h2>
        <p className="text-lightContent mb-10 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
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
          {team?.map((member, i) => (
            <SwiperSlide key={i} className="flex flex-col items-center">
              <Image
                src={member.photo}
                alt={member.name}
                width={200}
                height={200}
                unoptimized
                preload
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
