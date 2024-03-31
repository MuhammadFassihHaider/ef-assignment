import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { getAllCountries } from "@/utils/getAllCountries";
import { HomeMainContent } from "./HomeMainContent";

export default async function Home() {
    const countries = await getAllCountries();

    if (!countries || countries.length === 0) {
        // TODO
        return <>Error</>;
    }

    const countriesSorted = countries.sort((a, b) => {
        return a.name.common < b.name.common ? -1 : 1;
    });

    return (
        <ContentTemplate>
            <HomeMainContent countries={countriesSorted} />
        </ContentTemplate>
    );
}
