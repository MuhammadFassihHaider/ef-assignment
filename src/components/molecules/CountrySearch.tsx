"use client";
import { Input } from "../atoms/Input";
import { MagnifierIcon } from "../atoms/MagnifierIcon";

export const CountrySearch = () => {
    return (
        <div className="relative">
            <MagnifierIcon className="absolute top-1/2 transform -translate-y-1/2 left-4 " />
            <Input placeholder="Search for a country..." className="px-12" />
        </div>
    );
};
