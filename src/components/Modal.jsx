import React from "react";
import { ProductData } from "./ProductData";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Modal({ selectedImg, setSelectedImg, setShowModal }) {
    return (
        <main className="bg-black bg-opacity-90 select-none fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center">
            <IoClose
                onClick={() => setShowModal(false)}
                className="text-white text-3xl hover:bg-zinc-800 rounded-full p-1 absolute top-5 right-5 "
            />
            <div>
                <img
                    src={ProductData[selectedImg].image}
                    alt="Main Image"
                    className=" xs:w-full md:w-8/12 lg:w-6/12 xl:w-7/12 mx-auto rounded-2xl border-2 border-zinc-200"
                />
                <ul className="flex justify-between items-center text-white lg:text-5xl xs:text-3xl [&>*]:cursor-pointer">
                    <li
                        onClick={() =>
                            selectedImg > 0
                                ? setSelectedImg((prevSelectedImg) => prevSelectedImg - 1)
                                : setSelectedImg(ProductData.length - 1)
                        }
                        className="top-1/2 absolute left-2 hover:opacity-80"
                    >
                        <IoIosArrowDropleftCircle />
                    </li>
                    <li
                        onClick={() =>
                            selectedImg < ProductData.length - 1
                                ? setSelectedImg((prevSelectedImg) => prevSelectedImg + 1)
                                : setSelectedImg(0)
                        }
                        className="top-1/2 absolute right-2 hover:opacity-80"
                    >
                        <IoIosArrowDroprightCircle />
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Modal;
