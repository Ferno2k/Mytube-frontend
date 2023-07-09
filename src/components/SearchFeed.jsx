import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search/?q=${searchTerm}`).then((data) => {
      // console.log(data.contents);
      setVideos(data.contents);
    });
  }, [searchTerm]);

  return (
    <div className="overflow-y-auto p-1 xs:p-4">
      <h4 className="my-4 pl-2 text-4xl font-bold capitalize text-white xs:pl-0">
        Search Result for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm} </span>
        videos
      </h4>
      <Videos videos={videos} thumbnailQuality={0} />
    </div>
  );
};
export default SearchFeed;
