import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsFillArrowDownSquareFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdPeople } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoMdHelpCircle, IoMdPricetag } from "react-icons/io";

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2 ">
                        Delivery
                    </p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/* search */}
            <div className="bg-gray-200 flex items-center px-2 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20} />
                <input
                    className="bg-transparent p-2 focus:outline-none w-full"
                    type="text"
                    placeholder="Search foods"
                />
            </div>

            {/* cart */}
            <button className="bg-black text-white hidden md:flex py-2 rounded-full px-6">
                <BsFillCartFill className="mr-1" size={20} />
                Cart
            </button>

            {/* mobile menu */}
            {/* overlay */}
            {nav && (
                <div className="bg-black/75 fixed w-full h-screen top-0 left-0 z-10 "></div>
            )}

            {/* side drawer menu */}

            <div
                className={
                    nav
                        ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    className="absolute top-4 right-4 cursor-pointer"
                    size={30}
                />
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4">
                        <li className="flex py-4 text-xl">
                            <TbTruckDelivery className="mr-4" size={25} />{" "}
                            Orders
                        </li>
                        <li className="flex py-4 text-xl">
                            <MdFavorite className="mr-4" size={25} /> Favorites
                        </li>
                        <li className="flex py-4 text-xl">
                            <FaWallet className="mr-4" size={25} /> Wallet
                        </li>
                        <li className="flex py-4 text-xl">
                            <IoMdHelpCircle className="mr-4" size={25} /> Help
                        </li>
                        <li className="flex py-4 text-xl">
                            <IoMdPricetag className="mr-4" size={25} />{" "}
                            Promotions
                        </li>
                        <li className="flex py-4 text-xl">
                            <BsFillArrowDownSquareFill
                                className="mr-4"
                                size={25}
                            />{" "}
                            Best Ones
                        </li>
                        <li className="flex py-4 text-xl">
                            <MdPeople className="mr-4" size={25} /> Invite
                            Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
