import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { getAllCountries } from "@/utils/getAllCountries";
import { HomeMainContent } from "./HomeMainContent";
import { customError } from "@/utils/customError";

export default async function Home() {
    const response = await getAllCountries();

    if (response.hasError) {
        throw customError(response.message, response.code);
    }

    //	=======================================================================
    //				Sort country names alphabetically.
    //	=======================================================================

    const countriesSorted = response.data.sort((a, b) => {
        return a.name.common < b.name.common ? -1 : 1;
    });

    return (
        <ContentTemplate>
            <HomeMainContent countries={countriesSorted} />
        </ContentTemplate>
    );
}
