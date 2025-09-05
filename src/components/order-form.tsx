"use client";

import { useForm } from "react-hook-form";
import { useSecurityContext } from "@/lib/hooks";

export default function OrderForm() {
    const { selectedSecurity } = useSecurityContext();

    const { register, trigger, getValues, formState: { errors } } = useForm<TPetForm>({
        resolver: zodResolver(petFormSchema),
        defaultValues: {}
    });

    return (
        <form className="flex flex-col">
            <div className="space-y-3">

            </div>
        </form>
    );
}
