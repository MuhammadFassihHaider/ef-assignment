"use client";
import { useRouter } from "next/navigation";
import { StatRow } from "../../components/atoms/StatRow";
import { useCallback } from "react";
import Image from "next/image";

type TProps = {
    commonName: string;
    officialName: string;
    population: string;
    region: string;
    capital: string;
    imageSrc: string;
    imageAlt: string;
};

export const CountryCard = ({
    capital,
    imageSrc,
    commonName,
    officialName,
    population,
    region,
    imageAlt,
}: TProps) => {
    const router = useRouter();

    const onClickCard = useCallback(() => {
        router.push(officialName);
    }, [officialName, router]);

    return (
        <div
            className="shadow-md hover:scale-[102%] transition cursor-pointer w-full border dark:border-dark-blue rounded-md overflow-hidden"
            onClick={onClickCard}
            data-test={commonName}
        >
            <div className="overflow-hidden rounded-t-md w-full h-48 relative">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className=" object-cover object-center"
                    fill
                />
            </div>
            <div className="p-6 dark:bg-dark-blue rounded-b-md h-full">
                <h3 className="text-lg font-bold mb-4 md:text-xl">
                    {commonName}
                </h3>
                <StatRow title="Population" value={population} />
                <StatRow title="Region" value={region} />
                <StatRow title="Capital" value={capital} />
            </div>
        </div>
    );
};
