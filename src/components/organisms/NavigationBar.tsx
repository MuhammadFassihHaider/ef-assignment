import React from "react";
import { NavigationHeading } from "../atoms/NavigationHeading";
import { ThemeSwitcher } from "../molecules/ThemeSwitcher";

export const NavigationBar = () => {
    return (
        <nav className="flex items-center justify-between py-8 bg-white dark:bg-dark-blue shadow-md mb-6 px-6">
            <NavigationHeading />
            <ThemeSwitcher />
        </nav>
    );
};
