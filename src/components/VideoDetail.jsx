import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`video/details/?id=${id}`).then((data) =>
      setVideoDetail(data)
    );

    fetchFromAPI(`video/related-contents/?id=${id}`).then((data) => {
      setVideos(data.contents);
    });
  }, [id]);

  if (!VideoDetail) return "Loading...";

  const {
    title,
    author: { channelId, title: channelTitle },
    stats: { views, likes },
  } = VideoDetail;

  return (
    <div className="min-h-[95vh] sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="w-full lg:h-screen">
          <div className="sticky top-20 w-full">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <h5 className="p-2 text-lg font-bold text-white xs:p-4 sm:px-0">
              {title}
            </h5>
            <div className="flex flex-row justify-between gap-4 px-2 text-white xs:px-4 sm:px-0">
              <Link to={`/channel/${channelId}`}>
                <h6 className="text-base font-medium text-white">
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </h6>
              </Link>
              <div className="flex flex-row gap-5 text-center">
                <p className="text-sm font-normal opacity-70">
                  {parseInt(views).toLocaleString()} views
                </p>
                <p className="text-sm font-normal opacity-70">
                  {parseInt(likes).toLocaleString()} likes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-5 sm:py-0 lg:w-[60%] ">
          <Videos videos={videos} direction="column" />
        </div>
      </div>
    </div>
  );
};
export default VideoDetail;
