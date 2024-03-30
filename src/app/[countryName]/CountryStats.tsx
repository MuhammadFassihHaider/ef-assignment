import { StatRow } from "@/components/atoms/StatRow";

type TProps = {
    name: string;
    nativeName: string;
    population: string;
    region: string;
    subRegion: string;
    capital: string;
    topLevelDomain: string;
    currencies: string;
    languages: string;
};

export const CountryStats = ({
    capital,
    currencies,
    languages,
    name,
    nativeName,
    population,
    region,
    subRegion,
    topLevelDomain,
}: TProps) => (
    <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">{name}</h1>
        <div className="flex flex-col md:flex-row md:justify-between lg:flex-col xl:flex-row xl:space-x-20 ">
            <div className="flex flex-col mb-6 md:mb-8 space-y-3">
                <StatRow title="Native name" value={nativeName} />
                <StatRow title="Population" value={population} />
                <StatRow title="Region" value={region} />
                <StatRow title="Sub Region" value={subRegion} />
                <StatRow title="Capital" value={capital} className="" />
            </div>
            <div className="flex flex-col space-y-3">
                <StatRow title="Top Level Domain" value={topLevelDomain} />
                <StatRow title="Currencies" value={currencies} />
                <StatRow title="Languages" value={languages} />
            </div>
        </div>
    </div>
);
