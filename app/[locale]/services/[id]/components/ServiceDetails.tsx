"use client";
import Container from "@/components/Container";
import { useRouter } from "@/i18n/navigation";
import { useServiceById } from "@/lib/hooks/useService";
import { useLocale } from "next-intl";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";

interface ServicePageProps {
  serviceId: string;
}

export default function ServiceDetails({ serviceId }: ServicePageProps) {
  const { data: service, isLoading, error } = useServiceById(serviceId);
  const router = useRouter();
  const locale = useLocale();
  const isRTL = locale === "ar";

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  if (!service) {
    return (
      <div className="py-20 text-center text-gray-600">Service not found.</div>
    );
  }
  const handleBack = () => router.back();

  return (
    <div className="min-h-screen">
      {/* HERO IMAGE */}
      <div className="relative h-[80vh] w-full">
        <Image
          src={service.image} // Replace with your image
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
            <span className="text-title">Back</span>
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

                {/* Render Rich Text HTML */}
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
