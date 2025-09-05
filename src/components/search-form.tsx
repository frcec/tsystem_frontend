"use client";

import { useFilterContext } from "@/lib/hooks";

export default function SearchForm() {
    const { searchText, handleChangeSearchText } = useFilterContext();
    return (
        <form className="h-full w-full">
            <input 
                type="search"
                className="h-full w-full bg-white/20 rounded-md px-5 outline-none transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50" 
                placeholder="Search security"
                value={searchText}
                onChange={e => handleChangeSearchText(e.target.value)}
            />
        </form>
    );
}
