import { useState } from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GifState } from "../context/gif-context";

function Header() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState([]);

  const { giphyFetch } = GifState();

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center">
        {/* Link - doesnot reloads the page */}
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" className="w-8" alt="Giphy Logo" />
          {/* tracking-tight - to make text closer to each other */}
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        {/* render categories */}
        <div className="font-bold text-md flex gap-2 items-center">
          {/* gradient - custom class */}
          <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
            Reactions
          </Link>

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient showCategories ${
                showCategories ? "gradient" : ""
              }  border-b-4 cursor-pointer hidden lg:block`}
            />
          </button>

          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favorites">Favorite GIFs</Link>
          </div>

          {/* for mobile screen */}
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight
              size={30}
              className="text-sky-400 block lg:hidden"
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <Link className="font-bold">Reactions</Link>
            </div>
          </div>
        )}
      </div>

      {/* Search */}
    </nav>
  );
}

export default Header;
