"use client";
import { CountryCard } from "@/components/molecules/CountryCard";
import { CountrySearch } from "@/components/molecules/CountrySearch";
import { Dropdown } from "@/components/molecules/Dropdown";
import { useDebounce } from "@/hooks/useDebounce";
import { Regions } from "@/utils/constants";
import { formatPopulation } from "@/utils/formatPopulation";
import { ChangeEventHandler, useCallback, useMemo, useState } from "react";

type TProps = {
    countries: TCountries;
};

export const HomeMainContent = ({ countries }: TProps) => {
    const [search, setSearch] = useState("");
    const [dropdownValue, setDropdownValue] = useState("");

    const debouncedSearch = useDebounce(search, 300);

    const onChangeSearch: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            setSearch(e.target.value.trim());
        },
        [setSearch]
    );

    const onSelectDropdown = useCallback(
        (_: number, value: string) => {
            if (value === dropdownValue) {
                setDropdownValue("");
            } else {
                setDropdownValue(value);
            }
        },
        [setDropdownValue, dropdownValue]
    );

    const countriesWithFilters = useMemo(() => {
        const debouncedSearchLowerCased = debouncedSearch?.toLowerCase();
        return countries.filter((country) => {
            // filter search value in common name & official name
            const nameMatch =
                country?.name?.common
                    ?.toLowerCase()
                    ?.includes(debouncedSearchLowerCased) ||
                country.name.official
                    .toLowerCase()
                    .includes(debouncedSearchLowerCased);

            // filter country by region
            const regionMatch = country?.region
                ?.toLowerCase()
                ?.includes(dropdownValue.toLowerCase());
            return nameMatch && regionMatch;
        });
    }, [dropdownValue, debouncedSearch, countries]);

    const countriesToRender = useMemo(() => {
        return countriesWithFilters.map((country) => {
            return (
                <CountryCard
                    key={country.name.common}
                    imageSrc={country.flags.svg}
                    imageAlt={country.flags.alt}
                    commonName={country.name.common}
                    officialName={country.name.official}
                    capital={country.capital[0]}
                    population={formatPopulation(country.population.toString())}
                    region={country.region}
                />
            );
        });
    }, [countriesWithFilters]);

    return (
        <>
            <CountrySearch value={search} onChange={onChangeSearch} />
            <Dropdown
                triggerProps={{ placeholder: "Filter by Region" }}
                containerProps={{ className: "mb-6 md:self-end" }}
                dropdownItems={Regions}
                onClick={onSelectDropdown}
                selectedValue={dropdownValue}
            />

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4">
                {countriesToRender}
            </section>
        </>
    );
};
