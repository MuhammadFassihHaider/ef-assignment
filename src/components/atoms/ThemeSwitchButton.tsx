"use client";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { MoonIconFill } from "./MoonIconFill";
import { MoonIconOutline } from "./MoonIconOutline";

type Props = {
    themeToSet: "light" | "dark";
};

export const ThemeSwitchButton = ({ themeToSet }: Props) => {
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
            className="flex items-center gap-x-2 font-semibold"
            onClick={() => setTheme(themeToSet)}
        >
            <Icon />
            {label}
        </button>
    );
};
