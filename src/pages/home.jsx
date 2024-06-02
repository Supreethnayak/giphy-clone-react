import { useEffect } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/gif";
import FilterGif from "../components/filter-gif";

function Home() {
  // GifState function has useContext and GifContext
  const { giphyFetch, gifs, setGifs, filter, setFilter, favorites } =
    GifState();

  // fetch trending gifs
  useEffect(() => {
    const fetchTrendingGifs = async () => {
      try {
        const { data } = await giphyFetch.trending({
          limit: 20,
          type: filter, // bydefault filter is gifs
          rating: "g",
        });
        setGifs(data);
      } catch (error) {}
    };
    fetchTrendingGifs();
  }, [filter]); // call when filter changes

  return (
    <div className="">
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />

      {/* gif filters */}
      <FilterGif showTrending={true} />

      {/* onclick of gif take to single gif page  */}
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs?.map((gif) => {
          return <Gif gif={gif} />;
        })}
      </div>
    </div>
  );
}

export default Home;
