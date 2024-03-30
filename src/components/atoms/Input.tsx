import { cn } from "@/utils/cn";
import React from "react";

type TProps = React.ComponentProps<"input">;

export const Input = ({ className, ...props }: TProps) => {
    return (
        <input
            {...props}
            className={cn(
                "py-3 md:py-4 px-4 md:px-5 outline-none border rounded-md shadow-md dark:bg-dark-blue dark:border-very-dark-blue dark:text-white md:text-lg",
                className
            )}
        />
    );
};
