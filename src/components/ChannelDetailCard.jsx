import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelDetailCard = ({ channelDetail }) => {
  let viewportWidth = window.innerWidth;

  return (
    <div>
      <div
        className="h-[8rem] sm:h-[15rem] md:h-[8rem]"
        style={{
          background: `url(${
            viewportWidth < 426
              ? channelDetail?.banner?.mobile[1]?.url
              : channelDetail?.banner?.desktop[1]?.url
          }) center 35% / contain no-repeat `,
        }}
      />
      <div className="ml-4 p-2 text-white sm:ml-10 sm:p-6">
        <div className="flex items-center">
          <img
            src={channelDetail?.avatar?.[1]?.url || demoProfilePicture}
            alt={channelDetail?.title}
            className=" h-full w-full basis-32 overflow-hidden rounded-[50%]"
          />
          <div className=" mx-8 flex-auto">
            <div className="flex items-center gap-[0.175rem]">
              <h6
                className="overflow-hidden text-ellipsis whitespace-normal text-2xl font-normal"
                style={{
                  WebkitLineClamp: 1,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {channelDetail?.title}
              </h6>
              <span>
                {channelDetail?.badges?.[0]?.text === "Verified" && (
                  <CheckCircle
                    sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                  />
                )}
              </span>
            </div>
            <div className="m-l flex flex-wrap gap-1 text-sm text-gray-400">
              <span
                className="overflow-hidden text-ellipsis whitespace-normal"
                style={{
                  WebkitLineClamp: 1,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {channelDetail?.username}
              </span>
              <span
                className="overflow-hidden text-ellipsis whitespace-normal"
                style={{
                  WebkitLineClamp: 1,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {channelDetail?.stats?.subscribersText}
              </span>
              <span
                className="overflow-hidden text-ellipsis whitespace-normal"
                style={{
                  WebkitLineClamp: 1,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {channelDetail?.stats?.videosText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChannelDetailCard;
