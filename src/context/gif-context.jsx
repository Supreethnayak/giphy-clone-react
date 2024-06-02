import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";

// 1. create context
// 2. create provider component and pass children
const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]); // to store gifs
  const [filter, setFilter] = useState("gifs"); // to know which filter is selected
  const [favorites, setFavorites] = useState([]); // to store favorites

  const giphyFetch = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

  /* fetch favorites
  from local storage and set it */
  useEffect(() => {
    // JSON.parse - convert stringified values to object or array
    const response = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
    setFavorites(response);
  }, []);

  /* Common function - can be used anywhere 
  storing favorite id's to local storage */
  const addToFavorites = (id) => {
    // remove
    if (favorites.includes(id)) {
      const updatedFavorites = favorites.filter((itemId) => itemId !== id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } else {
      // add
      const updatedFavorites = [...favorites];
      updatedFavorites.push(id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };
  return (
    // value will be accessible to whole app
    <GifContext.Provider
      value={{
        giphyFetch,
        gifs,
        setGifs,
        filter,
        setFilter,
        favorites,
        addToFavorites,
      }}
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
