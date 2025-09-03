import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import { Toaster } from "@/components/ui/sonner";

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BackgroundPattern />
            <div className="flex flex-col mx-auto min-h-screen max-w-[1050px] px-4">
                <AppHeader />
                {children}
                <AppFooter />
            </div>
            <Toaster position="top-right" />
        </>
    );
}
