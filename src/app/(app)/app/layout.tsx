import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import { Toaster } from "@/components/ui/sonner";
import FilterContextProvider from "@/contexts/filter-context-provider";
import SecurityContextProvider from "@/contexts/security-context-provider";
import { SECURITY_DATA } from "@/lib/constants";
import { Security } from "@/lib/types";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const securities: Security[] = SECURITY_DATA;
    return (
        <>
            <BackgroundPattern />
            <div className="flex flex-col mx-auto min-h-screen max-w-[80rem] px-4">
                <AppHeader />
                <FilterContextProvider>
                    <SecurityContextProvider data={securities}>
                        {children}
                    </SecurityContextProvider>
                </FilterContextProvider>
                <AppFooter />
            </div>
            <Toaster position="top-right" />
        </>
    );
}
