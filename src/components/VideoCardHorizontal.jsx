import { Link } from "react-router-dom";

import { CheckCircle, Sensors } from "@mui/icons-material";
import { abbreviateNumber } from "js-abbreviation-number";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCardHorizontal = ({ video }) => {
  return (
    <div className=" flex w-full flex-row">
      <Link to={video?.videoId ? `/video/${video?.videoId}` : demoVideoUrl}>
        <div className=" mr-2 block h-24 w-44 ">
          <img
            src={video?.thumbnails?.[0]?.url || demoThumbnailUrl}
            alt={video?.title}
            className=" h-full w-full overflow-hidden rounded-lg object-cover"
          />
        </div>
      </Link>
      <div>
        <div className="box-border flex flex-col sm:pr-4 ">
          <Link
            to={video?.videoId ? `/video/${video?.videoId}` : demoChannelUrl}
          >
            <h6
              className="mb-1 max-h-16 overflow-hidden text-ellipsis whitespace-normal text-sm font-medium text-white"
              style={{
                WebkitLineClamp: 2,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
              }}
            >
              {video?.title || demoVideoTitle}
            </h6>
          </Link>
          <Link
            to={
              video?.author?.channelId
                ? `/channel/${video?.author?.channelId}`
                : demoChannelUrl
            }
          >
            <div className=" text-xs leading-[1.5em] text-gray-400">
              {video?.author?.title || demoChannelTitle}
              {video?.author?.badges?.[0]?.text === "Verified" && (
                <CheckCircle
                  sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                />
              )}
            </div>
          </Link>
          <Link
            to={video?.videoId ? `/video/${video?.videoId}` : demoChannelUrl}
          >
            <div className="flex  text-xs leading-[1.5em] text-gray-400">
              <span>
                {abbreviateNumber(
                  video?.stats?.views || video?.stats?.viewers,
                  1,
                  {
                    symbols: ["", "K", "M", "B", "T"],
                    padding: false,
                  }
                )}{" "}
                views
              </span>
              {video?.publishedTimeText && (
                <span className=" before:mx-1 before:content-['•']">
                  {video?.publishedTimeText}
                </span>
              )}
            </div>
            {video?.isLiveNow && (
              <div className=" mr-1 mt-1 flex items-center">
                <div className="block cursor-pointer rounded-sm bg-red-700 px-[3px] py-0 text-xs tracking-wide text-white">
                  <Sensors
                    style={{ fontSize: "medium", verticalAlign: "middle" }}
                  />
                  <span className=" pl-1 align-middle font-medium">LIVE</span>
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default VideoCardHorizontal;
