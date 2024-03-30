"use client";
import React, { ComponentProps } from "react";
import { ArrowLeftIcon } from "../atoms/LeftArrow";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

type TProps = ComponentProps<"button">;

export const BackButton = (props?: TProps) => {
    const router = useRouter();
    return (
        <button
            {...props}
            onClick={() => router.back()}
            className={cn(
                "dark:bg-dark-blue flex items-center justify-center max-w-max py-1.5 px-6 rounded-md shadow-md transform hover:scale-[102%] border dark:border-dark-blue",
                props?.className
            )}
        >
            <ArrowLeftIcon className="mr-2" />
            Back
        </button>
    );
};
