import { BackButton } from "@/components/molecules/BackButton";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { formatPopulation } from "@/utils/formatPopulation";
import { getCountryByCountryCode } from "@/utils/getCountryByCountryCode";
import { getCountryByName } from "@/utils/getCountryByName";
import { BorderCountryChips } from "./BorderCountryChips";
import { CountryFlag } from "./CountryFlag";
import { CountryStats } from "./CountryStats";
// import { notFound } from "next/navigation";
import { customError } from "@/utils/customError";
import { Metadata } from "next";

type TContext = {
    params?: { countryName?: string };
};

export async function generateMetadata({
    params,
}: TContext): Promise<Metadata> {
    return {
        title: params?.countryName,
    };
}

export default async function CountryDetails(context: TContext) {
    if (!context?.params?.countryName) {
        throw customError("Bad request!", 400);
    }

    const countryName = decodeURIComponent(context?.params?.countryName);

    let countryDetails: TCountry | null = null;

    try {
        //	=======================================================================
        //      I had first implemented to get country by name, if it does
        //      not exist, to get the country by code. Reason was what if
        //      there is a country with a name that is only 3 letters long.
        //      I have changed the implementation. Now, I call the endpoint
        //      that only looks for exact name instead of common general search.
        //      This saves me calling 2 endpoints.
        //      The con of this is that if the user changes the endpoint by
        //      themselves, it will error out.
        //	=======================================================================
        const functionToCall =
            countryName.length === 3
                ? getCountryByCountryCode(countryName)
                : getCountryByName(countryName);

        const response = await functionToCall;

        if (response.hasError) {
            throw customError(response.message, response.code);
        }

        countryDetails = response.data;
    } catch (error) {
        throw customError("Something went wrong!", 500);
    }

    const nativeNames = Object.values(countryDetails.name.nativeName)
        .map((nativeName) => nativeName.common)
        .join(", ");
    const currencies = Object.values(countryDetails.currencies)
        .map((currency) => currency.name)
        .join(", ");
    const languages = Object.values(countryDetails.languages).join(", ");
    const capitals = countryDetails.capital.join(", ");
    const population = formatPopulation(countryDetails.population.toString());
    const topLevelDomain = countryDetails.tld.join(", ");

    //	=======================================================================
    //   Could not get border country names from symbol because
    //   the endpoint is probably rate limited. I could get the names
    //   by adding time between api calls but it does not seem worth it to do that.
    //   It will just increase the page load time. To counter that, if I do not
    //   find the country by name, I search by the symbol. In the border chips,
    //   I just show the country symbols
    /* 
            const countryBorderPromises = countryDetails.borders.map((border) =>
                getCountryByCountryCode(border)
            );
            const borders = await Promise.all(countryBorderPromises);
    */
    //	=======================================================================

    return (
        <ContentTemplate>
            <BackButton className="mb-16" />
            <section className="flex flex-col lg:flex-row lg:space-x-20 xl:space-x-10 xl:justify-between lg:items-center">
                <CountryFlag
                    imageSrc={countryDetails.flags.svg}
                    imageAlt={countryDetails.flags.alt}
                />
                <div>
                    <CountryStats
                        name={countryDetails.name.common}
                        nativeName={nativeNames}
                        population={population}
                        region={countryDetails.region}
                        subRegion={countryDetails.subregion}
                        capital={capitals}
                        topLevelDomain={topLevelDomain}
                        currencies={currencies}
                        languages={languages}
                    />
                    {countryDetails?.borders?.length > 1 && (
                        <BorderCountryChips
                            borderCountries={countryDetails.borders}
                        />
                    )}
                </div>
            </section>
        </ContentTemplate>
    );
}
