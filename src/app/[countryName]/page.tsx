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

type TContext = {
    params?: { countryName?: string };
};

export default async function CountryDetails(context: TContext) {
    if (!context?.params?.countryName) {
        throw customError("Bad request!", 400);
    }

    let countryDetails: TCountry | null = null;

    try {
        const response = await getCountryByName(context.params.countryName);

        if (response.hasError) {
            countryDetails = null;
        } else {
            countryDetails = response.data;
        }
    } catch (error) {
        countryDetails = null;
    }

    //	=======================================================================
    //		Handle error if fail to get country details by country name.
    //      Try with country code. Reason is explained below. I could just
    //      check if the length of the string is 3, that means it is country
    //      code. It would save an API request I do not know any country name
    //      with only three letters but seems risky
    //	=======================================================================

    if (!countryDetails) {
        try {
            const response = await getCountryByCountryCode(
                context.params.countryName
            );

            if (response.hasError) {
                throw customError(response.message, response.code);
            }

            countryDetails = response.data;
        } catch (error) {
            throw customError("Something went wrong!", 500);
        }
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
                    <BorderCountryChips
                        borderCountries={countryDetails.borders}
                    />
                </div>
            </section>
        </ContentTemplate>
    );
}
