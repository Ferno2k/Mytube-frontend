import { Link } from "react-router-dom";
import { useState } from "react";

import { categories, logo } from "../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <button onClick={() => setShowSidebar(!showSidebar)}>
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </button>

      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className={`${showSidebar && "backdrop"}`}
      >
        <div className={`sidebar ${showSidebar && "show"}`}>
          <div className="flex h-[10%] w-full items-center gap-4 bg-black pl-6 pt-6">
            <div onClick={() => setShowSidebar(!showSidebar)}>
              <MenuIcon fontSize="large" sx={{ color: "white" }} />
            </div>
            <Link to="/">
              <img src={logo} alt="logo" className="h-12" />
            </Link>
            <p className=" text-3xl font-bold">MyTube</p>
          </div>
          <div className=" overflow-y-auto">
            {categories.map((category) => (
              <Link to="/" key={category.name}>
                <span
                  className="category-btn"
                  style={{
                    background: category.name === selectedCategory && "#FC1503",
                    color: "white",
                  }}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <span
                    style={{
                      color:
                        category.name === selectedCategory ? "white" : "red",
                    }}
                  >
                    {category.icon}
                  </span>
                  <span
                    style={{
                      opacity: category.name === selectedCategory ? "1" : "0.8",
                    }}
                  >
                    {category.name}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </button>
    </div>
  );
};
export default SideBar;
