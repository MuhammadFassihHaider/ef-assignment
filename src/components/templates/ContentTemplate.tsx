import React from "react";

type TProps = {
    children: React.ReactNode;
};

export const ContentTemplate = ({ children }: TProps) => {
    return (
        <main className="px-6 md:px-8 lg:px-10 flex flex-col xl:max-w-screen-xl xl:mx-auto">
            {children}
        </main>
    );
};
