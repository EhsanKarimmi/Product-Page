import React, { useState } from "react";
import { ProductData } from "./ProductData";
import { PiShoppingCart } from "react-icons/pi";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

function Product() {
    const [selectedImg, setSelectedImg] = useState(0);
    const [amount, setAmount] = useState(0);

    return (
        <div className="grid grid-cols-12 pt-8">
            {/* Product Images */}
            <section className="col-span-6">
                <img
                    src={ProductData[selectedImg].image}
                    alt="Main Image"
                    className="w-9/12 mx-auto rounded-2xl border-2 border-zinc-200"
                />
                <ul className="w-9/12 mx-auto flex justify-between items-center m-2">
                    {ProductData.map((product) => {
                        return (
                            <li
                                key={product.id}
                                onClick={() => setSelectedImg(product.id)}
                                className="cursor-pointer rounded-2xl bg-zinc-200"
                            >
                                <img
                                    src={product.image}
                                    alt="Thumbnail"
                                    className={`w-24 rounded-2xl border-2 hover:opacity-50 transition-all duration-200 ${
                                        selectedImg === product.id
                                            ? `opacity-50 border-orange-500`
                                            : `opacity-100`
                                    }`}
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
            {/* Product Details */}
            <article className=" col-span-4 py-20">
                <h2 className="bg-zinc-200 p-1 font-semibold text-xs rounded-md text-orange-500 uppercase inline-block">
                    Sneakers Company
                </h2>
                <h1 className="font-bold text-4xl my-8">Fall Limited Edition Sneakers</h1>
                <p className="text-base font-medium opacity-80 ">
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they’ll withstand everything the
                    weather can offer.
                </p>
                <div className="my-10 ">
                    <div className="flex justify-start items-center gap-6">
                        <span className="font-extrabold text-2xl">$125.00</span>
                        <span className=" text-sm font-semibold p-1 bg-zinc-200 text-orange-500 rounded-md">
                            50%
                        </span>
                    </div>
                    <p className="my-2 font-medium text-lg opacity-50">
                        <s>$250.00</s>
                    </p>
                </div>
                <div className="flex justify-between items-center gap-5 select-none">
                    <ul className="bg-zinc-200 flex justify-center items-center [&>*]:p-3   gap-1 p-1 rounded-md text-base font-semibold">
                        <li
                            onClick={() =>
                                amount === 0
                                    ? null
                                    : setAmount((prevAmount) => prevAmount - 1)
                            }
                            className="cursor-pointer rounded-md text-xl text-orange-500 hover:bg-zinc-300 transition-all du"
                        >
                            <CgMathMinus />
                        </li>
                        <li className="w-9">{amount}</li>
                        <li
                            onClick={() => setAmount((prevAmount) => prevAmount + 1)}
                            className="cursor-pointer rounded-md text-xl text-orange-500 hover:bg-zinc-300 transition-all du"
                        >
                            <CgMathPlus />
                        </li>
                    </ul>
                    <button className="flex justify-center items-center bg-orange-500 text-white h-14 w-full text-lg  font-semibold gap-4 uppercase rounded-md">
                        <PiShoppingCart className="text-2xl" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </article>
        </div>
    );
}

export default Product;
