"use client";
import Container from "@/components/Container";
import { Link, useRouter } from "@/i18n/navigation";
import { useService } from "@/lib/hooks/useService";
import { useLocale, useTranslations } from "next-intl";
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

function ServicesSearch() {
  const t = useTranslations("servicesSearch");
  const query = useSelector((state: RootState) => state.search.query);
  const { data: services = [], isLoading, error } = useService(query);
  const locale = useLocale();
  const router = useRouter();

  const isRTL = locale === "ar";
  const handleBack = () => router.back();

  return (
    <div className="min-h-screen">
      {/* HERO IMAGE */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="/hero.png"
          alt={t("heroAlt")}
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
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-gray-700 hover:underline mb-6"
          >
            <FaChevronLeft
              className={`text-title ${isRTL ? "rotate-180" : ""}`}
            />
            <span className="text-title">{t("back")}</span>
          </button>

          {/* Services Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {isLoading ? (
              <p className="p-4">{t("loading")}</p>
            ) : error ? (
              <p className="p-4 text-red-500">{t("error")}</p>
            ) : services.length === 0 ? (
              <p className="p-4">{t("noServices")}</p>
            ) : (
              services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-sm mb-4 p-6 border border-gray-200"
                >
                  <h2 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 my-2">{service.description}</p>
                  <Link
                    href={`/services/${service.documentId}`}
                    className="text-primary underline underline-offset-2"
                  >
                    {t("readMore")}
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ServicesSearch;
