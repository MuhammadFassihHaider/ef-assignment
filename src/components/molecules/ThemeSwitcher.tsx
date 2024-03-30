"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { ThemeSwitchButton } from "../atoms/ThemeSwitchButton";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <p>Loading...</p>;
    }

    if (resolvedTheme === "dark") {
        return <ThemeSwitchButton themeToSet="light" />;
    }

    if (resolvedTheme === "light") {
        return <ThemeSwitchButton themeToSet="dark" />;
    }
};
