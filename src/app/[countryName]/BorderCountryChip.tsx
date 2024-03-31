import Link from "next/link";

type TProps = {
    country: string;
};

export const BorderCountryChip = ({ country }: TProps) => (
    <Link
        href={`/${country}`}
        className="px-4 py-1 text-sm border dark:bg-dark-blue rounded-md shadow-sm dark:border-dark-blue"
    >
        {country}
    </Link>
);
