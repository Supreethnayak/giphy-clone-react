import { useEffect, useState } from "react";
import Gif from "../components/gif";
import { GifState } from "../context/gif-context";

const Favorites = () => {
  const { giphyFetch, favorites } = GifState();
  const [favoriteGIFs, setFavoriteGIFs] = useState([]);

  // fetch favorites
  useEffect(() => {
    const fetchFavoriteGIFs = async () => {
      const { data: gifs } = await giphyFetch.gifs(favorites);
      setFavoriteGIFs(gifs);
    };
    fetchFavoriteGIFs();
  }, []);

  return (
    <div className="mt-2">
      <span className="faded-text ">My Favorites</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {favoriteGIFs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
