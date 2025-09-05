"use client";

import { useSecurityContext } from "@/lib/hooks";
import { Security } from "@/lib/types";
import GammaAvatar from "./gamma-avatar";
import CreateOrderBtn from "./create-order-btn";

export default function SecurityDetails() {
    const { selectedSecurity } = useSecurityContext();
    return (
        <section className="flex flex-col h-full w-full">
            {selectedSecurity ? (
                <>
                <TopBar security={selectedSecurity} />
                </>
            ) : (
                <div className="h-full flex justify-center items-center">
                    <EmptyView />
                </div>
            )}
        </section>
    );
}

function TopBar({ security }: { security: Security }) {
    return (
        <div className="flex items-center bg-white px-5 sm:px-8 py-5 border-b border-light">
            <GammaAvatar 
                className="h-[75px] w-[75px]"
                gamma={security.gamma} 
            />
            <hgroup className="ml-5 space-y-1">
                <p className="text-sm text-zinc-600 font-medium">
                    {security.exchange}:{security.symbol}
                </p>
                <h2 className="text-xl sm:text-3xl font-semibold leading-7 ">
                    {security.name}
                </h2>
            </hgroup>
            <div className="ml-auto">
                <CreateOrderBtn />
            </div>
        </div>
    );
}

function EmptyView() {
    return (
        <p className="text-2xl font-medium">No security selected</p>
    );
}
