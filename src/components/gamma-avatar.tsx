import { cn } from "@/lib/utils";

type GammaAvatarProps = {
    gamma: number;
};

export default function GammaAvatar({ gamma }: GammaAvatarProps) {
    return (
        <div 
            className={cn(
                "flex items-center justify-center w-[45px] h-[45px] rounded-3xl", 
                gamma < 0 ? "bg-sky-600/75" : gamma > 0 ? "bg-red-600/75" : "bg-zinc-400"
            )}
        >
            <span className="text-white text-[0.7rem] font-semibold">
                {gamma.toFixed(2)}
            </span>
        </div>
    );
}
