import { useState } from "react";

import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <form
      className=" flex rounded-3xl border border-solid border-white bg-white pl-4"
      onSubmit={handleSubmit}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-3xl p-2 text-red-700 hover:bg-gray-300"
      >
        <Search />
      </button>
    </form>
  );
};
export default SearchBar;
