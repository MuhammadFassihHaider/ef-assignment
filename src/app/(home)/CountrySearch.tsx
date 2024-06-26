"use client";
import { ChangeEventHandler, memo } from "react";
import { Input } from "../../components/atoms/Input";
import { MagnifierIcon } from "../../components/atoms/MagnifierIcon";

type TProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

export const CountrySearchUnMemo = ({ onChange, value }: TProps) => {
    return (
        <div className="relative mb-4 md:mb-0 p-0">
            {/* Intentionally kept the paddings around search small */}
            {/* I did not like the padding-x to padding-y ratio in the resource picture */}
            <MagnifierIcon className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-5" />
            <Input
                placeholder="Search for a country..."
                className="px-12 md:px-14 w-full max-w-96"
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export const CountrySearch = memo(CountrySearchUnMemo);
