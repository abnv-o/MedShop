import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black p-8">
      
      <div className="text-white">
        <h1 className="text-4xl text-blue-400 tracking-widest">MEDSHOP</h1>
      </div>
      <div className="flex items-center">
      <Link to="/login"> 
        <button className="border border-2 border-blue-400 text-2xl rounded-sm text-white py-2 px-3">
          Login
        </button>
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
