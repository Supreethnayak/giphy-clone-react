import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useState } from "react";

// 1. create context
// 2. create provider component and pass children
const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]); // to store gifs
  const [filter, setFilter] = useState("gifs"); // to know which filter is selected
  const [favorites, setFavorites] = useState([]); // to store favorites

  const giphyFetch = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
  return (
    // value will be accessible to whole app
    <GifContext.Provider
      value={{ giphyFetch, gifs, setGifs, filter, setFilter, favorites }}
    >
      {children}
    </GifContext.Provider>
  );
};

/* function to get useContext and GifContext at once
 so no need of importing 2 things */
export const GifState = () => {
  return useContext(GifContext);
};

export default GifProvider;
