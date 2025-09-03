import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="background min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
            <Image 
                src="./logo.svg"
                alt="Preview"
                width={519}
                height={472}
            />
            <div>
                <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
                    Manage your{' '}
                    <span className="font-extrabold">orders</span>
                    {' '}efficiently
                </h1>
                <p className="text-2xl font-medium max-w-[600px]">
                    Use our platform to track, organize, and streamline your sales orders. 
                </p>
                <div className="mt-10 space-x-3">
                    <Button asChild>
                        <Link href="/signup">Get started</Link>
                    </Button>
                    <Button asChild variant="secondary">
                        <Link href="/login">Log in</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
