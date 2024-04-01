"use client";

import { useTheme } from "next-themes";
import { memo, useEffect, useState } from "react";

import { ThemeSwitchButton } from "../atoms/ThemeSwitchButton";

export const ThemeSwitcher = memo(() => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <></>;
    }

    if (resolvedTheme === "dark") {
        return <ThemeSwitchButton themeToSet="light" />;
    }

    if (resolvedTheme === "light") {
        return <ThemeSwitchButton themeToSet="dark" />;
    }
});
