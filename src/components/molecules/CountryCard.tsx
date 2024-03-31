"use client";
import { useRouter } from "next/navigation";
import { StatRow } from "../atoms/StatRow";
import { useCallback } from "react";

type TProps = {
    name: string;
    population: string;
    region: string;
    capital: string;
    imageSrc: string;
    imageAlt: string;
};

export const CountryCard = ({
    capital,
    imageSrc,
    name,
    population,
    region,
    imageAlt,
}: TProps) => {
    const router = useRouter();

    const onClickCard = useCallback(() => {
        router.push(name);
    }, []);

    return (
        <div
            className="shadow-md hover:scale-[102%] transition cursor-pointer w-full border dark:border-dark-blue rounded-md overflow-hidden"
            onClick={onClickCard}
        >
            <div className="overflow-hidden rounded-t-md">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-48 object-cover object-center"
                    height={300}
                />
            </div>
            <div className="p-6 dark:bg-dark-blue rounded-b-md h-full">
                <h3 className="text-lg font-bold mb-4 md:text-xl">{name}</h3>
                <StatRow title="Population" value={population} />
                <StatRow title="Region" value={region} />
                <StatRow title="Capital" value={capital} />
            </div>
        </div>
    );
};
