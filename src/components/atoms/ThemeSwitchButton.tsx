"use client";
import { useTheme } from "next-themes";
import { memo, useMemo } from "react";
import { MoonIconFill } from "./MoonIconFill";
import { MoonIconOutline } from "./MoonIconOutline";

type TProps = {
    themeToSet: "light" | "dark";
};

export const ThemeSwitchButtonUnMemo = ({ themeToSet }: TProps) => {
    const { setTheme } = useTheme();

    const Icon = useMemo(
        () => (themeToSet === "light" ? MoonIconFill : MoonIconOutline),
        [themeToSet]
    );

    const label = useMemo(
        () => (themeToSet === "light" ? "Light" : "Dark"),
        [themeToSet]
    );

    return (
        <button
            className="flex items-center gap-x-2 md:gap-x-3 font-semibold"
            onClick={() => setTheme(themeToSet)}
        >
            <Icon />
            <span className={"min-w-[93px] md:text-lg"}>{label} Mode</span>
        </button>
    );
};

export const ThemeSwitchButton = memo(ThemeSwitchButtonUnMemo);
