import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import PropTypes from 'prop-types';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="fixed top-0 flex items-center justify-around w-full bg-blue-500 ">
      <p className="p-4 text-2xl font-semibold text-white ">Dashboard</p>
      <div className="relative w-[40%]">
        <input
          type="text"
          placeholder="Search for widgets"
          className="w-full p-2 rounded-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <CiSearch className="absolute text-xl text-gray-500 top-2 right-4" />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
