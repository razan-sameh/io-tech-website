"use client";
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/searchSlice";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const t = useTranslations("header");

  const handleToggle = () => setShow(!show);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchTerm.trim() === "") return;
    
    // Save search term in Redux
    dispatch(setSearchQuery(searchTerm.trim()));
    router.push("/services");
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {/* Desktop Search (lg and up) */}
      <div className="hidden lg:flex relative items-center">
        {show && (
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-1 rounded border outline-none w-48 focus:w-64 transition-all duration-300"
              autoFocus
            />
          </form>
        )}
        <FaSearch
          className="cursor-pointer hover:text-gray-300 ml-2 text-lg"
          onClick={() => {
            if (show && searchTerm.trim() !== "") {
              handleSubmit();
            } else {
              handleToggle();
            }
          }}
        />
      </div>

      {/* Mobile Search (below lg) */}
      <div className="block lg:hidden">
        <FaSearch
          className="cursor-pointer hover:text-gray-300 text-lg"
          onClick={handleToggle}
        />
      </div>

      {/* Mobile Search Overlay */}
      {show && (
        <div className="lg:hidden fixed inset-0 bg-opacity-90 z-50 flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-md">
            <div className="flex items-center gap-3 bg-white rounded-lg p-3">
              <FaSearch className="text-gray-500 text-xl" />
              <form onSubmit={handleSubmit} className="flex-1">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full outline-none text-gray-900 text-lg"
                  autoFocus
                />
              </form>
              <FaTimes
                className="text-gray-500 text-xl cursor-pointer hover:text-gray-700"
                onClick={handleClose}
              />
            </div>
            {searchTerm.trim() && (
              <button
                onClick={() => handleSubmit()}
                className="w-full mt-4 bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Search
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}