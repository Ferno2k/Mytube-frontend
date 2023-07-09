import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelDetailCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  // const [viewPortDevice, setViewPortDevice] = useState("Desktop");

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channel/details/?id=${id}`).then((data) => {
      setChannelDetail(data);
      console.log(data);
    });

    fetchFromAPI(`channel/videos/?id=${id}`).then((data) =>
      setVideos(data?.contents)
    );
  }, [id]);

  return (
    <div className="min-h-[95vh]">
      <div>
        <ChannelDetailCard channelDetail={channelDetail} />
      </div>
      <div className="flex p-4">
        <Videos videos={videos} thumbnailQuality={2} />
      </div>
    </div>
  );
};
export default ChannelDetail;
