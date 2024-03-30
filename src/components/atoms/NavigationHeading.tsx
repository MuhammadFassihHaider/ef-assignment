import Link from "next/link";
import React from "react";

export const NavigationHeading = () => {
    return (
        <h1 className="text-xl md:text-2xl font-bold">
            <Link href={"/"}>Where in the world?</Link>
        </h1>
    );
};
