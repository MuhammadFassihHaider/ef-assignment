"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <p>Loading...</p>;
    }

    if (resolvedTheme === "dark") {
        return <button onClick={() => setTheme("light")}>Light</button>;
    }
    
    if (resolvedTheme === "light") {
        return <button onClick={() => setTheme("dark")}>Dark</button>;
    }
    return <div>ThemeSwitcher</div>;
};
