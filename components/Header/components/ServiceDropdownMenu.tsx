"use client";
import { Link } from "@/i18n/navigation";
import { useService } from "@/lib/hooks/useService";

interface Props {
  onClose: () => void;
}

export default function ServiceDropdownMenu({ onClose }: Props) {
  const { data: servicesWithMeta, isLoading, error } = useService();
  const services = servicesWithMeta?.data || [];
  if (isLoading) {
    return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-primary text-white rounded-lg shadow-2xl p-4 md:p-6 z-50 w-[60vw] md:w-[85vw]">

        {/* Loading Text */}
        <p className="text-white text-sm md:text-base">Loading services</p>

        {/* Animated Dots */}
        <div className="flex gap-2">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-0"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-400"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-primary text-white rounded-lg shadow-2xl p-4 md:p-6 z-50 w-[60vw] md:w-[85vw]">
        Failed to load services.
      </div>
    );
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-primary text-white rounded-lg shadow-2xl p-4 md:p-6 z-50 w-[60vw] md:w-[85vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6 relative z-10 max-h-[70vh] overflow-y-auto">
        {services.map((service, idx) => (
          <Link
            key={idx}
            href={`/services/${service.documentId}`}
            className="block text-xs md:text-sm hover:text-gray-300 transition py-1"
            onClick={onClose}
          >
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
