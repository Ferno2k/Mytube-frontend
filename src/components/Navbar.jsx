import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between gap-2 bg-black p-3 ">
      <div className="flex items-center gap-2 xs:gap-4">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Link to="/" onClick={() => setSelectedCategory("Home")}>
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 max-w-fit xs:h-12  xs:w-12"
          />
        </Link>
        <p className=" text-2xl font-bold text-white xs:text-3xl ">MyTube</p>
      </div>
      <div className=" w-full max-w-md xs:w-[30%]">
        <SearchBar />
      </div>
    </div>
  );
};
export default Navbar;
