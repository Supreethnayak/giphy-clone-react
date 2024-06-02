import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import FilterGif from "../components/filter-gif";
import Gif from "../components/gif";

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const { giphyFetch, filter } = GifState();

  const { query } = useParams();

  // fetch search results
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        // :query is from path
        const { data } = await giphyFetch.search(query, {
          sort: "relevant",
          lang: "en",
          type: filter,
          limit: 20,
        });
        setSearchResults(data);
      } catch (error) {}
    };
    fetchSearchResults();
  }, [filter]);
  // call again on change of filter

  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>

      {/* gif filters - show on left side for search page */}
      <FilterGif alignLeft={true} />

      {/* show results */}
      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
          {/* onclick of gif take to single gif page  */}
          {searchResults?.map((gif) => {
            return <Gif gif={gif} />;
          })}
        </div>
      ) : (
        <span>
          No GIFs found for {query}. Try searching for Stickers instead?
        </span>
      )}
    </div>
  );
}

export default SearchPage;
