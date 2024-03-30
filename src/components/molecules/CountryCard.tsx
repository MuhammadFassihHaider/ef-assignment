import Image from "next/image";
import React from "react";
import { CardRow } from "../atoms/CountryCardRow";

type TProps = {
    name: string;
    population: string;
    region: string;
    capital: string;
    image: string;
};

export const CountryCard = ({
    capital,
    image,
    name,
    population,
    region,
}: TProps) => {
    return (
        <div className="shadow-md hover:scale-[102%] transition cursor-pointer w-full">
            <div className="overflow-hidden rounded-t-md max-h-[250px]">
                <img
                    src={image}
                    alt="country flag"
                    className="w-full object-contain"
                    height={300}
                />
            </div>
            <div className="p-6 dark:bg-dark-blue rounded-b-md">
                <p className="text-lg font-bold mb-4">{name}</p>
                <CardRow title="Population" value={population} />
                <CardRow title="Region" value={region} />
                <CardRow title="Capital" value={capital} />
            </div>
        </div>
    );
};
