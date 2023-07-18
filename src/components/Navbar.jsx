import React, { useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import avatar from "../assets/images/avatar.png";
import { IoClose } from "react-icons/io5";
import Cart from "./Cart";

function Navbar({ amount, setAmount }) {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showCart, setShowCart] = useState(false);
    return (
        <div className="flex justify-between items-center px-5 py-4 border-b-2 border-zinc-300">
            {/* Logo and links */}
            <div className="flex justify-start items-center lg:gap-10 xs:gap-3">
                {/* Mobile Sidebar and menu icon */}
                <GiHamburgerMenu
                    className="visible text-2xl lg:hidden"
                    onClick={() => setShowSidebar(true)}
                />
                {/* Mobile sidebar */}
                <div
                    className={`h-[100vh] w-1/2 bg-white z-50  top-0  px-5 py-6 xs:fixed lg:hidden shadow-md transition-all duration-200 ${
                        showSidebar ? ` left-0` : `-left-1/2`
                    }`}
                >
                    <IoClose
                        onClick={() => setShowSidebar(false)}
                        className=" text-3xl bg-zinc-200 p-1 rounded-full"
                    />
                    <ul className="flex flex-col justify-start items-start gap-5 font-medium text-base [&>*]:hover:cursor-pointer mt-10">
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
                </div>
                <h1 className="text-2xl font-Chakra font-extrabold uppercase cursor-pointer">
                    sneakers
                </h1>
                <nav className="hidden lg:block">
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
            {/* Profile and cart */}
            <div className="flex justify-end items-center gap-6 ">
                <div className="flex justify-center items-center">
                    <PiShoppingCart
                        onClick={() => setShowCart(!showCart)}
                        className="text-2xl font-bold cursor-pointer"
                    />
                    <span
                        className={`absolute px-1 bg-orange-500 text-white rounded-full text-[0.7rem] font-bold translate-x-3 -translate-y-2 ${
                            amount === 0 ? `hidden` : ``
                        }`}
                    >
                        {amount}
                    </span>
                </div>
                <img
                    src={avatar}
                    alt="Profile Image"
                    className="w-10 object-cover hover:border-2 rounded-full border-orange-500 cursor-pointer"
                />
            </div>
            {showCart ? (
                <Cart amount={amount} setAmount={setAmount} setShowCart={setShowCart} />
            ) : null}
        </div>
    );
}

export default Navbar;
