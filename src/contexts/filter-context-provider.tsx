"use client";

import { createContext, useState } from "react";

type TFilterContext = {
    searchText: string;
    handleChangeSearchText: (newText: string) => void;
    sortAscending: boolean;
    toggleSortDir: () => void;
};

type FilterContextProviderProps = {
    children: React.ReactNode;
}

export const FilterContext = createContext<TFilterContext | null>(null);

export default function FilterContextProvider({ children }: FilterContextProviderProps) {
    const [searchText, setSearchText] = useState("");
    const [sortAscending, setSortAscending] = useState(true);
    
    const toggleSortDir = () => setSortAscending(v => !v);

    const handleChangeSearchText = (newText: string) => {
        setSearchText(newText);
    }
    
    return (
        <FilterContext.Provider value={{
            searchText: searchText,
            handleChangeSearchText: handleChangeSearchText,
            sortAscending,
            toggleSortDir
        }}>
            {children}
        </FilterContext.Provider>
    );
}
