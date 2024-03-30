import { cn } from "@/utils/cn";
import React from "react";

type Props = React.ComponentProps<"input">;

export const Input = ({ className, ...props }: Props) => {
    return (
        <input
            {...props}
            className={cn(
                "py-3 px-4 outline-none border rounded-md shadow-md dark:bg-dark-blue dark:border-very-dark-blue dark:text-white",
                className
            )}
        />
    );
};
