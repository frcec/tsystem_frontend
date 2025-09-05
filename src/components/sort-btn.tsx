"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useFilterContext } from "@/lib/hooks";
import { Button } from "./ui/button";

export default function SortBtn() {
    const { sortAscending, toggleSortDir } = useFilterContext();
    return (
        <Button 
            className="cursor-pointer"
            onClick={toggleSortDir}
            size="icon" 
        >
            {sortAscending ? (
                <ChevronUpIcon className="size-6" color="white" />
            ) : (
                <ChevronDownIcon className="size-6" color="white" />
            )}
        </Button>
    );
}
