"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/searchSlice";
import { useRouter } from "@/i18n/navigation";

interface SearchInputProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

export default function SearchInput({ show, setShow }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleToggle = () => setShow(!show);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // Save search term in Redux
    dispatch(setSearchQuery(searchTerm.trim()));
    router.push(`/services`);
    setShow(false);
  };

  return (
    <div className={`relative flex items-center`}>
      {show && (
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 rounded border outline-none transition hidden md:block"
          />
        </form>
      )}
      <FaSearch
        className="cursor-pointer hover:text-gray-300 ml-2"
        onClick={() => {
          if (show && searchTerm.trim() !== "") {
            handleSubmit();
          } else {
            handleToggle();
          }
        }}
      />
    </div>
  );
}
