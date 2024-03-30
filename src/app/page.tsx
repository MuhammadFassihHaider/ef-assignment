import { Input } from "@/components/atoms/Input";
import { NavigationHeading } from "@/components/atoms/NavigationHeading";
import { ThemeSwitcher } from "@/components/molecules/ThemeSwitcher";
import { CountrySearch } from "@/components/molecules/CountrySearch";

export default function Home() {
    return (
        <main className="">
            <CountrySearch />
        </main>
    );
}
