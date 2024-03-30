import { CountryCard } from "@/components/molecules/CountryCard";
import { CountrySearch } from "@/components/molecules/CountrySearch";
import { Dropdown } from "@/components/molecules/Dropdown";
import { Regions } from "@/utils/constants";

export default function Home() {
    return (
        <main className="px-6 flex flex-col">
            <CountrySearch />
            <Dropdown
                triggerProps={{ placeholder: "Filter by Region" }}
                containerProps={{ className: "mb-6 md:self-end" }}
                dropdownItems={Regions}
            />

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {new Array(15).fill(0).map((item) => {
                    return (
                        <CountryCard
                            key={item}
                            image="https://via.placeholder.com/400x400"
                            name="Germany"
                            capital="Berlin"
                            population="87,777,777"
                            region="Europe"
                        />
                    );
                })}
            </section>
        </main>
    );
}
