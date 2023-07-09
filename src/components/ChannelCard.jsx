import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className="m-auto flex w-80 items-center justify-center">
      <Link to={`/channel/${channelDetail?.channelId}`}>
        <div className="flex flex-col items-center justify-center text-center text-white">
          <div className="mb-4 block h-44 w-44 ">
            <img
              src={channelDetail?.avatar?.[1]?.url || demoProfilePicture}
              alt={channelDetail?.title}
              className="h-full w-full overflow-hidden rounded-[50%] object-cover"
            />
          </div>
          <h6 className="text-lg font-medium">
            {channelDetail?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </h6>
        </div>
      </Link>
    </div>
  );
};
export default ChannelCard;
