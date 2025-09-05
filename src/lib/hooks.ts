import { useContext } from "react";
import { SecurityContext } from "@/contexts/security-context-provider";
import { FilterContext } from "@/contexts/filter-context-provider";

export function useSecurityContext() {
    const context = useContext(SecurityContext);
    if (!context) {
        throw Error("useSecurityContext must be used within useSecurityContext")
    }
    return context;
}

export function useFilterContext() {
    const context = useContext(FilterContext);
    if (!context) {
        throw Error("useFilterContext must be used within FilterContextProvider")
    }
    return context;
}
