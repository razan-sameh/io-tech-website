"use client";
import Container from "@/components/Container";
import { useRouter } from "@/i18n/navigation";
import { useServiceById } from "@/lib/hooks/useService";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";

interface ServicePageProps {
  serviceId: string;
}

export default function ServiceDetails({ serviceId }: ServicePageProps) {
  const t = useTranslations("serviceDetails");
  const { data: service, isLoading } = useServiceById(serviceId);
  const router = useRouter();
  const locale = useLocale();
  const isRTL = locale === "ar";

  if (isLoading) {
    return (
      <div className="min-h-screen">
        {/* Hero Skeleton */}
        <div className="relative h-[80vh] w-full bg-primary/70 animate-pulse" />

        <Container>
          <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
            {/* Back button skeleton */}
            <div className="w-20 h-6 bg-gray-300 rounded" />

            {/* Title skeleton */}
            <div className="w-3/4 h-10 bg-gray-300 rounded" />

            {/* Sections skeleton */}
            <div className="space-y-8">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-1/3 h-6 bg-gray-300 rounded" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full" />
                    <div className="h-4 bg-gray-300 rounded w-5/6" />
                    <div className="h-4 bg-gray-300 rounded w-4/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="py-20 text-center text-gray-600">{t("notFound")}</div>
    );
  }

  const handleBack = () => router.back();

  return (
    <div className="min-h-screen">
      {/* HERO IMAGE */}
      <div className="relative h-[80vh] w-full">
        <Image
          src={service.image || "/hero.png"}
          alt={service.title}
          fill
          className="object-cover brightness-50"
          unoptimized
          preload
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <Container>
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-gray-700 hover:underline mb-6"
          >
            <FaChevronLeft
              className={`text-title ${isRTL ? "rotate-180" : ""}`}
            />
            <span className="text-title">{t("back")}</span>
          </button>

          <h1 className="text-3xl font-semibold mb-6 text-title">
            {service.title}
          </h1>

          <div className="space-y-10">
            <p>{service.description}</p>

            {service.sections.map((section) => (
              <div key={section.id} className="space-y-3">
                <h2 className="text-xl font-semibold text-title">
                  {section.title}
                </h2>

                <div
                  className="prose max-w-none text-content"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
