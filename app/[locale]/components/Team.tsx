"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import Container from "@/components/Container";
import { useTeam } from "@/lib/hooks/useTeam";
import { enmContact } from "@/content/enum";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Team() {
  const { data: team, isLoading } = useTeam();
  const t = useTranslations("team");
  if (isLoading)
    return (
      <section className="py-16 text-center bg-background">
        <Container>
          <div className="h-8 w-48 bg-gray-300 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-96 bg-gray-300 rounded mx-auto mb-10 animate-pulse"></div>

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
            {[1, 2, 3].map((_, i) => (
              <SwiperSlide key={i} className="flex flex-col items-center">
                <div className="w-48 h-48 bg-gray-300 animate-pulse mb-4"></div>
                <div className="h-6 w-32 bg-gray-300 animate-pulse mb-2"></div>
                <div className="h-4 w-24 bg-gray-300 animate-pulse"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    );

  const contactIcons = {
    [enmContact.whatsapp]: FaWhatsapp,
    [enmContact.call]: FaPhone,
    [enmContact.email]: FaEnvelope,
  };
  const contactOrder = [enmContact.whatsapp, enmContact.call, enmContact.email];

  return (
    <section className="py-16 text-center bg-background">
      <Container>
        <h2 className="text-3xl font-semibold mb-4 text-title">{t("title")}</h2>
        <p className="text-lightContent mb-10 max-w-2xl mx-auto">
          {t("description")}
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
                src={member.photo || "/avatar.png"}
                alt={member.name}
                width={200}
                height={200}
                unoptimized
                preload
              />
              <h3 className="mt-4 font-semibold text-title">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              {/* Contact Links */}
              <div className="flex mt-2 gap-4">
                {member.contactLinks
                  .sort(
                    (a, b) =>
                      contactOrder.indexOf(a.type) -
                      contactOrder.indexOf(b.type)
                  )
                  .map((link, idx) => {
                    const Icon = contactIcons[link.type];
                    if (!Icon) return null;

                    // Format href based on type
                    let href = "#";
                    if (link.type === enmContact.whatsapp) {
                      href = `https://wa.me/${link.value.replace(/\D/g, "")}`;
                    } else if (link.type === enmContact.call) {
                      href = `tel:${link.value}`;
                    } else if (link.type === enmContact.email) {
                      href = `mailto:${link.value}`;
                    }

                    return (
                      <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:text-primary transition"
                      >
                        <Icon />
                      </a>
                    );
                  })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
