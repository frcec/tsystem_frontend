"use client";

import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function CreateOrderBtn() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
                <Button 
                    className="cursor-pointer"
                    size="icon" 
                >
                    <PlusIcon className="size-6" color="white" />
                </Button>
             </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a new order
                    </DialogTitle>
                </DialogHeader>
                Form
            </DialogContent>
        </Dialog>
    );
}
