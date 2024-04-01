"use client";
import { useClickOutsideDropdown } from "@/hooks/useOnClickOutside";
import { cn } from "@/utils/cn";
import { ComponentProps, memo, useCallback, useRef, useState } from "react";
import { ChevronUpIcon } from "../atoms/ChevronUpIcon";

type TTriggerProps = Omit<ComponentProps<"button">, "children"> & {
    placeholder: string;
};

type TContainerProps = ComponentProps<"div">;

type TProps = {
    triggerProps: TTriggerProps;
    containerProps?: TContainerProps;
    dropdownItems: TDropdownItem<number, string>[];
    onClick?: (key: number, value: string) => void;
    selectedValue: string;
};

const DropdownUnMemo = ({
    dropdownItems,
    triggerProps,
    onClick,
    containerProps,
    selectedValue,
}: TProps) => {
    const [open, setOpen] = useState(false);
    const itemsContainerRef = useRef(null);

    const onClickOutside = useCallback(() => {
        setOpen(false);
    }, []);

    useClickOutsideDropdown(itemsContainerRef, onClickOutside);

    return (
        <div
            {...containerProps}
            ref={itemsContainerRef}
            className={cn(
                "relative max-w-max lg:max-w-none lg:min-w-[230px]",
                containerProps?.className
            )}
        >
            <button
                onClick={() => setOpen((prev) => !prev)}
                {...triggerProps}
                className={cn(
                    "flex items-center justify-between py-3 md:py-4 px-4 md:px-5 rounded-md shadow-md dark:bg-dark-blue w-48 text-gray-400 md:text-lg text-nowrap lg:min-w-[230px]",
                    triggerProps.className
                )}
            >
                {triggerProps.placeholder}
                <ChevronUpIcon
                    className={cn(
                        "transform transition-transform",
                        open ? "rotate-180" : ""
                    )}
                />
            </button>

            {open && (
                <div
                    className={cn(
                        "absolute min-h-[48px] rounded-md shadow-md dark:bg-dark-blue mt-1.5 w-48 z-50 flex flex-col lg:min-w-[230px] bg-white"
                    )}
                >
                    <ul>
                        {dropdownItems.map(({ key, value }) => (
                            <li
                                key={key}
                                onClick={() => onClick && onClick(key, value)}
                                className={cn(
                                    "cursor-pointer hover:bg-dark-blue rounded-md py-2 px-4 md:py-3 md:px-5 md:text-lg hover:text-white dark:hover:text-white dark:hover:bg-very-dark-blue",
                                    value === selectedValue &&
                                        "text-white dark:bg-very-dark-blue bg-dark-blue"
                                )}
                            >
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export const Dropdown = memo(DropdownUnMemo);
