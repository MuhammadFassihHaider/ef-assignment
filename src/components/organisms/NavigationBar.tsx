import React from "react";
import { NavigationHeading } from "../atoms/NavigationHeading";
import { ThemeSwitcher } from "../molecules/ThemeSwitcher";

export const NavigationBar = () => {
    return (
        <nav className="py-8 bg-white dark:bg-dark-blue shadow-md mb-6  ">
            <div className="xl:max-w-screen-xl xl:mx-auto flex items-center justify-between lg:px-10 px-6 md:px-8">
                <NavigationHeading />
                <ThemeSwitcher />
            </div>
        </nav>
    );
};
