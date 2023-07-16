import React from "react";
import { PiShoppingCart } from "react-icons/pi";
import avatar from "../assets/images/avatar.png";

function Navbar() {
    return (
        <div className="flex justify-between items-center px-5 py-4">
            {/* Logo and links */}
            <div className="flex justify-start items-center gap-10">
                <h1 className="text-2xl font-Chakra font-extrabold uppercase cursor-pointer">
                    sneakers
                </h1>
                <nav>
                    <ul className="flex justify-start items-center gap-5 font-medium text-base [&>*]:hover:cursor-pointer ">
                        <li className="hover:border-b-2 border-black transition-all duration-100">
                            Collections
                        </li>
                        <li className="hover:border-b-2 border-black transition-all duration-100">
                            Men
                        </li>
                        <li className="hover:border-b-2 border-black transition-all duration-100">
                            Women
                        </li>
                        <li className="hover:border-b-2 border-black transition-all duration-100">
                            About
                        </li>
                        <li className="hover:border-b-2 border-black transition-all duration-100">
                            Contact
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Profile and card */}
            <div className="flex justify-end items-center gap-6 ">
                <PiShoppingCart className="text-2xl font-bold" />
                <img src={avatar} alt="Profile Image" className="w-10" />
            </div>
        </div>
    );
}

export default Navbar;