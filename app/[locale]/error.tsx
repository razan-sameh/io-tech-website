"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-primary text-white px-4">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-6">{t("message")}</p>
      <button
        onClick={() => reset()}
        className="bg-white text-primary px-6 py-3 rounded hover:bg-gray-200 transition"
      >
        {t("retryButton")}
      </button>
    </div>
  );
}
