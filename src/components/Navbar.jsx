import React from "react";
import Logo from "../img/logo.jpg"
import {Link} from "react-router-dom"
import '../index.css'

const Navbar = () => {
  return (
      <div className="w-[95%] mr-[30%] flex gap-8 items-center ">
      <img src={Logo} alt="" className="md:w-24 md:h-24 rounded-full ml-10 mt-5 invisible md:visible h-10"/>
      <div className="flex w-full justify-end gap-4 h-full items-center">
      <Link to='/?cat=art'>
        <h6>ART</h6>
        </Link>
        <Link to='/?cat=science'>
        <h6>SCIENCE</h6>
        </Link>
        <Link to='/?cat=technology'>
        <h6>TECHNOLOGY</h6>
        </Link>
        <Link to='/?cat=cinema'>
        <h6>CINEMA</h6>
        </Link>
        <Link to='/?cat=design'>
        <h6>DESIGN</h6>
        </Link>
        <Link to='/?cat=food'>
        <h6>FOOD</h6>
        </Link>
        <Link to='/?cat=john'>
        <h6 className="font-bold">john</h6>
        </Link>
        <Link to='/?cat=logout'>
        <h6 className="font-bold">Logout</h6>
        </Link>
        <Link to='/write'>
        <h6 className="bg-teal-400 w-14 h-14 flex justify-center items-center rounded-full hover:bg-white border-emerald-400 border-2 font-bold">Write</h6>
        </Link>
      </div>
      </div>
  );
};

export default Navbar;
