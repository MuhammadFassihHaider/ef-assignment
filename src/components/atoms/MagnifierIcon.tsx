import React from "react";
import { IoSearch } from "react-icons/io5";
import { cn } from "@/utils/cn";

type TProps = Parameters<typeof IoSearch>[0];

export const MagnifierIcon = ({ className, ...props }: TProps) => {
    return (
        <IoSearch
            {...props}
            className={cn(
                "text-gray-400 dark:bg-dark-blue dark:text-white h-4 w-4 md:h-5 md:w-5",
                className
            )}
        />
    );
};
