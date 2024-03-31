"use client";
import { ThemeProvider as Provider } from "next-themes";
import React from "react";

type TProps = {
    children: Readonly<React.ReactNode>;
};

export const ThemeProvider = ({ children }: TProps) => {
    return <Provider attribute="class">{children}</Provider>;
};
