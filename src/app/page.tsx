import { CountrySearch } from "@/components/molecules/CountrySearch";
import { Dropdown } from "@/components/molecules/Dropdown";
import { Regions } from "@/utils/constants";

export default function Home() {
    return (
        <main className="">
            <CountrySearch />
            <Dropdown
                triggerProps={{ placeholder: "Filter by Region" }}
                dropdownItems={Regions}
            />
        </main>
    );
}
