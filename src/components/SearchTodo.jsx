import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchTodo() {
    return (
        <div className="search-bar mt-6 flex">
            <input
                type="text"
                placeholder="Search Tasks"
                className="border w-[400px] py-1.5 px-3 rounded-tl-lg
                 rounded-bl-lg  border-gray-300 text-[14px] outline-none" />

            <button className="border px-4 py-2 bg-[#636ae8] text-white 
            rounded-r-lg -ml-px text-sm cursor-pointer">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    )
}


export default SearchTodo