import { BorderCountryChip } from "./BorderCountryChip";

type TProps = {
    borderCountries: string[];
};

export const BorderCountryChips = ({ borderCountries }: TProps) => (
    <div>
        <h2 className="text-xl font-bold mb-6">Border Countries</h2>
        <div className="grid grid-cols-[repeat(auto-fill,62px)] gap-2">
            {borderCountries.map((borderCountry) => (
                <BorderCountryChip
                    key={borderCountry}
                    country={borderCountry}
                />
            ))}
        </div>
    </div>
);
