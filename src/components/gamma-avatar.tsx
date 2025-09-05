import { cn } from "@/lib/utils";

type GammaAvatarProps = {
    className?: string;
    gamma: number;
};

export default function GammaAvatar({ 
    className,
    gamma 
}: GammaAvatarProps) {
    return (
        <div 
            className={cn(
                "flex items-center justify-center rounded-3xl text-white font-semibold tabular-nums", 
                gamma < 0 ? "bg-sky-600/75" : gamma > 0 ? "bg-red-600/75" : "bg-zinc-400",
                className
            )}
        >
            {gamma.toFixed(2)}
        </div>
    );
}
