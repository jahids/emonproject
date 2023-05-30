import Link from "next/link";
import React from "react";

const Test = () => {
    return (
        <>
            {/* <nav className="bg-gray-800">
                <div className="flex items-center space-x-5 h-16">
                    <div className="flex-shrink-0">
                        <Link className="flex  text-white text-xl font-semibold" href="/">
                            My Website
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="py-1 px-2 rounded-md bg-gray-700 text-white text-sm focus:outline-none focus:bg-gray-900"
                        />
                    </div>
                </div>
            </nav> */}
            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <input
                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                />
                <div class="grid place-items-center h-full w-12 text-gray-300">
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
        </>
    );
};

export default Test;

{
    /* <button className="ml-2 p-1 rounded-md bg-gray-700 hover:bg-gray-900 focus:outline-none">
    <svg
        className="h-4 w-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
    </svg>
</button> */
}
