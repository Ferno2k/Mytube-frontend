import { useState, useEffect } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const Feed = ({ selectedCategory }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (selectedCategory === "Home") {
      fetchFromAPI(`home/`).then((data) => {
        // console.log(data.contents);
        setVideos(data.contents);
      });
    } else {
      fetchFromAPI(`search/?q=${selectedCategory}`).then((data) => {
        // console.log(data.contents);
        setVideos(data.contents);
      });
    }
  }, [selectedCategory]);

  return (
    <div className="overflow-y-auto p-1 xs:p-4">
      <h4 className="mb-4 pl-2 text-4xl font-bold capitalize text-white xs:pl-0">
        {selectedCategory === "Home" ? "New" : selectedCategory}
        <span style={{ color: "#F31503" }}> videos</span>
      </h4>
      <Videos videos={videos} thumbnailQuality={0} />
    </div>
  );
};
export default Feed;
