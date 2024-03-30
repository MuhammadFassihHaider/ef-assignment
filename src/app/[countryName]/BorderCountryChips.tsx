import { BorderCountryChip } from "./BorderCountryChip";

export const BorderCountryChips = () => (
    <div>
        <h2 className="text-xl font-bold mb-6">Border Countries</h2>
        <div className="flex space-x-2">
            {new Array(3).fill(0).map((item) => (
                <BorderCountryChip key={item} />
            ))}
        </div>
    </div>
);
