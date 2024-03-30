import Link from "next/link";

export const BorderCountryChip = () => (
    <Link
        href={"/france"}
        className="px-4 py-1 text-sm border dark:bg-dark-blue rounded-md shadow-sm dark:border-dark-blue"
    >
        France
    </Link>
);
