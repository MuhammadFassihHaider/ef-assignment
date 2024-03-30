import { BorderCountryChip } from "./BorderCountryChip";

export const BorderCountryChips = () => (
    <div className="flex space-x-2">
        {new Array(3).fill(0).map((item) => (
            <BorderCountryChip key={item} />
        ))}
    </div>
);
