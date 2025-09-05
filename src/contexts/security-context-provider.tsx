"use client";

import { createContext, useState } from "react";
import { OptionalSelection, Security } from "@/lib/types";


type TSecurityContext = {
    securities: Security[];
    numberOfSecuritys: number;
    selectedSecurityId: OptionalSelection;
    handleChangeSelectedSecurityId: (id: string) => void;
    selectedSecurity: Security | undefined;
}

type SecurityContextProviderProps = {
    data: Security[];
    children: React.ReactNode;
}

export const SecurityContext = createContext<TSecurityContext | null>(null);

export default function SecurityContextProvider({ data, children }: SecurityContextProviderProps) {
    const [selectedSecurityId, setSelectedSecurityId] = useState<OptionalSelection>(null);

    const selectedSecurity = data.find(security => security.id === selectedSecurityId);
    const numberOfSecuritys = data.length;

    const handleChangeSelectedSecurityId = (id: string) => {
        setSelectedSecurityId(id);
    }
    
    return (
        <SecurityContext.Provider value={{
            securities: data,
            numberOfSecuritys,
            selectedSecurityId,
            handleChangeSelectedSecurityId,
            selectedSecurity,
        }}>
            {children}
        </SecurityContext.Provider>
    );
}
