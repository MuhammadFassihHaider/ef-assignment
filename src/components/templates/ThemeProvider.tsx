'use client';
import { ThemeProvider as Provider } from "next-themes";
import React from "react";

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    return (
        <Provider attribute="class">
            {children}
        </Provider>
    );
};
