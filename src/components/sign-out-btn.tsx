"use client";

import { Button } from "./ui/button";
import { useTransition } from "react";

export default function SignOutBtn() {
    const [isPending, startTransition] = useTransition();
    return (
        <Button 
            onClick={async () => {
                startTransition(async () => {
                    await new Promise(resolve => setTimeout(resolve, 1000))
                });
            }}
            disabled={isPending}
        >
            Sign out
        </Button>
    );
}
