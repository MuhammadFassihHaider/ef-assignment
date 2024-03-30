import React from "react";
import { IoSearch } from "react-icons/io5";
import { cn } from "@/utils/cn";

type TProps = Parameters<typeof IoSearch>[0];

export const MagnifierIcon = ({ className, ...props }: TProps) => {
    return (
        <IoSearch
            {...props}
            width={props.width ?? 20}
            height={props.height ?? 20}
            className={cn("text-gray-400 dark:bg-dark-blue dark:text-white", className)}
        />
    );
};
