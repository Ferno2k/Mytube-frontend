import { VideoCard, ChannelCard, VideoCardHorizontal } from "./";

const Videos = ({ videos, direction, thumbnailQuality }) => {
  if (!videos?.length) return "Loading...";

  return (
    <div
      className="flex flex-wrap"
      style={{
        flexDirection: direction || "row",
        justifyContent: direction ? "flex-start" : "center",
      }}
    >
      {videos.map((item, idx) => {
        if (item?.video?.videoId || item?.channel?.channelId) {
          return (
            <div className={`${direction ? "p-2" : "pb-2 xs:p-4"}`} key={idx}>
              {item?.type === "video" ? (
                direction ? (
                  <VideoCardHorizontal video={item?.video} />
                ) : (
                  <VideoCard
                    video={item?.video}
                    thumbnailQuality={thumbnailQuality}
                  />
                )
              ) : (
                <ChannelCard channelDetail={item?.channel} />
              )}
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};
export default Videos;
