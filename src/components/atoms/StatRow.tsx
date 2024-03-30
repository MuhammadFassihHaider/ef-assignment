import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

type TProps = { title: string; value: string } & ComponentProps<"p">;

export const StatRow = ({ title, value, ...props }: TProps) => {
    return (
        <p {...props} className={cn("mb-1 md:text-lg", props.className)}>
            <span className="font-semibold">{title}:</span> {value}
        </p>
    );
};
