import { BackButton } from "@/components/molecules/BackButton";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { BorderCountryChips } from "./BorderCountryChips";
import { CountryFlag } from "./CountryFlag";
import { CountryStats } from "./CountryStats";

export default function CountryDetails() {
    return (
        <ContentTemplate>
            <BackButton className="mb-16" />
            <CountryFlag imageSrc="https://via.placeholder.com/1000x1000" />
            <section>
                <CountryStats
                    name={"Belgium"}
                    nativeName={"Belgie"}
                    population={"87,777,777"}
                    region={"Europe"}
                    subRegion={"Western Europe"}
                    capital={"Brussels"}
                    topLevelDomain={".be"}
                    currencies={"Euro"}
                    languages={"Dutch, French, German"}
                />
                <h2 className="text-xl font-bold mb-6">Border Countries</h2>
                <BorderCountryChips />
            </section>
        </ContentTemplate>
    );
}
