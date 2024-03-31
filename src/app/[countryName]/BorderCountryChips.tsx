import { BorderCountryChip } from "./BorderCountryChip";

type TProps = {
    borderCountries: string[];
};

export const BorderCountryChips = ({ borderCountries }: TProps) => (
    <div>
        <h2 className="text-xl font-bold mb-6">Border Countries</h2>
        <div className="flex space-x-2">
            {borderCountries.map((borderCountry) => (
                <BorderCountryChip
                    key={borderCountry}
                    country={borderCountry}
                />
            ))}
        </div>
    </div>
);
