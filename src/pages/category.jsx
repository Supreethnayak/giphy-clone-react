import { useEffect, useState } from "react";
import { GifState } from "../context/gif-context";
import { useParams } from "react-router-dom";
import FollowOn from "../components/follow-on";
import Gif from "../components/gif";

function Category() {
  const [searchResults, setSearchResults] = useState([]);
  const { giphyFetch } = GifState();

  const { category } = useParams();

  useEffect(() => {
    const fetchSearchResults = async () => {
      const { data } = await giphyFetch.gifs(category, category);

      setSearchResults(data);
    };
    fetchSearchResults();
  }, [category]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {searchResults.length > 0 && <Gif gif={searchResults[0]} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, GIF it to me!
        </span>
        <FollowOn />
        <div className="w-full h-0.5 mt-6 bg-gray-800" />
      </div>

      {/* render all gif in same category */}
      <div>
        <h2 className="text-4xl pb-1 font-extrabold capitalize">
          {category.split("-").join(" & ")} GIFs
        </h2>
        <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
          @{category}
        </h2>

        {searchResults.length > 0 && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
            {/* we have already displayed first result, so skip it */}
            {searchResults.slice(1).map((gif) => (
              <Gif gif={gif} key={gif.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
