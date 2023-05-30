/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Nav = () => {
    return (
        <>
            <nav className="bg-black h-20">
                <div className="flex items-center justify-between h-16">
                    <div className="mx-24 flex items-center space-x-5">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <img className="h-14 w-14 mt-3 " src="/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        <div class=" mt-3 relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden">
                            <input
                                class="py-1 px-2 bg-gray-700 text-white text-sm h-10 focus:outline-none focus:bg-gray-900"
                                type="text"
                                id="search"
                                placeholder="Search something.."
                            />
                            <div class="absolute mx-36 grid place-items-center text-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block mt-3 mx-24">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                                href="/categories"
                            >
                                Categories
                            </Link>
                            <Link
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                                href="/login"
                            >
                                Login
                            </Link>
                            <Link
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                                href="/about"
                            >
                                About US
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
