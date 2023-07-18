import React from "react";
import product_1 from "../assets/images/productImages/product-1.jpg";
import { MdDelete } from "react-icons/md";

function Cart({ amount, setAmount, setShowCart }) {
    const title = "Fall Limited Edition Sneakers";
    return (
        <>
            <main
                onClick={() => setShowCart(false)}
                className="absolute top-0 bottom-0 left-0 right-0 z-40 h-screen w-full bg-transparent"
            ></main>
            <div className="absolute bg-white shadow-xl xs:w-full xs:right-0 xs:left-0 xs:top-[4.8rem]  md:w-96 h-52 rounded-md z-[100] md:top-20 md:right-2 xl:right-32 md:left-auto border-[2px] border-zinc-100 ">
                <h1 className="uppercase text-lg font-semibold border-b-2 border-zinc-300 px-4 py-2">
                    Cart
                </h1>

                {amount === 0 ? (
                    <div className="flex items-center justify-center text-lg font-bold opacity-50">
                        <h2>Your Cart Is Empty.</h2>
                    </div>
                ) : (
                    <div className="px-4 py-3 h-40 ">
                        <div className="  flex justify-between items-center w-full mb-4">
                            <img src={product_1} alt="Product" className="w-16 rounded-md" />
                            <div>
                                <h1 className="text-lg font-medium">{`${title.substring(
                                    0,
                                    21
                                )}...`}</h1>
                                <h3 className="flex justify-start items-center gap-3">
                                    <span className="font-medium text-base opacity-60">{`$ 125.00 x ${amount}=`}</span>
                                    <span className="font-semibold text-base opacity-100">
                                        $ {125.0 * amount}
                                    </span>
                                </h3>
                            </div>
                            <MdDelete
                                onClick={() => setAmount(0)}
                                className="text-2xl opacity-40 cursor-pointer hover:text-red-500 hover:opacity-90 transition-all duration-200"
                            />
                        </div>
                        <button className="w-full bg-orange-500 text-white h-14  text-base  font-semibold  uppercase rounded-md">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
