"use client";
import { onClickOutsideDropdown } from "@/hooks/useOnClickOutside";
import { cn } from "@/utils/cn";
import { ComponentProps, useCallback, useRef, useState } from "react";
import { ChevronDownIcon } from "../atoms/ChevronDownIcon";
import { ChevronUpIcon } from "../atoms/ChevronUpIcon";

type TTriggerProps = Omit<ComponentProps<"button">, "children"> & {
    placeholder: string;
};

type TDropdownItemProps = ComponentProps<"p">

type TProps = {
    triggerProps: TTriggerProps;
    dropdownItemProps?: TDropdownItemProps
    dropdownItems: TDropdownItem<number, string>[];
    onClick?: (key: number, value: string) => void;
};

export const Dropdown = ({ dropdownItems, triggerProps, onClick }: TProps) => {
    const [open, setOpen] = useState(false);
    const itemsContainerRef = useRef(null);

    const onClickOutside = useCallback(() => {
        setOpen(false);
    }, []);

    onClickOutsideDropdown(itemsContainerRef, onClickOutside);
    return (
        <div className="relative">
            <button
                {...triggerProps}
                onClick={() => setOpen((prev) => !prev)}
                className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-md shadow-md dark:bg-dark-blue w-48 text-gray-400",
                    triggerProps.className
                )}
            >
                {triggerProps.placeholder}
                {open ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </button>

            {open && (
                <div
                    ref={itemsContainerRef}
                    className="absolute min-h-[48px] rounded-md shadow-md dark:bg-dark-blue mt-1.5 w-48 z-50 flex flex-col"
                >
                    {dropdownItems.map(({ key, value }) => (
                        <p
                            key={key}
                            onClick={() => onClick && onClick(key, value)}
                            className="cursor-pointer hover:bg-very-dark-blue rounded-md py-2 px-4 hover:text-white dark:hover:text-white"
                        >
                            {value}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};
