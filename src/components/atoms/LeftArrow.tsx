import { IoArrowBack } from "react-icons/io5";
import React from "react";

type TProps = Parameters<typeof IoArrowBack>[0];

export const ArrowLeftIcon = (props: TProps) => {
    return <IoArrowBack {...props} />;
};
