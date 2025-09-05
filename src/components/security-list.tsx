"use client";
import { useMemo } from "react";
import { useSecurityContext, useFilterContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { OptionalSelection, Security } from "@/lib/types";
import GammaAvatar from "./gamma-avatar";

export default function SecurityList() {
    const { securities, selectedSecurityId, handleChangeSelectedSecurityId } = useSecurityContext();
    const { searchText, sortAscending } = useFilterContext();

    const filteredSecurities = useMemo(() => {
        const normalizedSearchText = searchText.toLowerCase();

        return securities.filter(securitiy =>
            securitiy.name.toLowerCase().includes(normalizedSearchText) ||
            securitiy.exchange.toLowerCase().includes(normalizedSearchText) ||
            securitiy.symbol.toLowerCase().includes(normalizedSearchText)
        );
    }, [securities, searchText]);

    const sortedSecurities = useMemo(() => {
        return [...filteredSecurities].sort((a, b) => {
            if (sortAscending) {
                return a.gamma - b.gamma;
            } else {
                return b.gamma - a.gamma;
            }
        });
        }, [filteredSecurities, sortAscending]);
       
    return (
        <ul className="bg-white border-b border-light">
            {sortedSecurities.map(security => 
                <SecurityListItem 
                    key={security.id}
                    security={security}
                    onClick={handleChangeSelectedSecurityId}
                    selectedSecurityId={selectedSecurityId}
                />
            )}
        </ul>
    );
}

type SecurityListItemProps = {
    security: Security;
    onClick: (id: string) => void;
    selectedSecurityId: OptionalSelection;
};

function SecurityListItem({ 
    security, 
    onClick, 
    selectedSecurityId 
}: SecurityListItemProps) {
    return (
        <li key={security.id}>
            <button
                onClick={() => onClick(security.id)} 
                className={cn("flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition", {
                    "bg-[#EFF1F2]": security.id === selectedSecurityId,
                })}
            >
                <GammaAvatar gamma={security.gamma} />
                <p className="font-semibold">
                    {security.name}{' '}
                    <span className="text-xs text-zinc-600">
                        {security.exchange}:{security.symbol}
                    </span>
                </p>
            </button>
        </li>
    );
}
