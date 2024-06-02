import { useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function GifSearch() {
  const navigate = useNavigate();
  //   const [query, searchQuery] = useState("");
  const [query, setQuery] = useState("");
  const searchGIFs = () => {
    // do nothing on empty search
    if (query.trim() === "") return;
    // else navigate to search page
    navigate(`/search/${query}`);
  };

  return (
    <div className="flex relative mt-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search all the GIFs and Stickers"
        className="w-full pl-4 pr-14 py-5 text-xl text-black rounded-tl rounded-bl border border-gray-300 outline-none"
      />
      {/* cancle option */}
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6"
        >
          <HiMiniXMark size={22} />
        </button>
      )}
      {/* search button */}
      <button
        onClick={searchGIFs}
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
}

export default GifSearch;
