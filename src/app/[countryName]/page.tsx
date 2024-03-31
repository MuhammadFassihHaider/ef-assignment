import { BackButton } from "@/components/molecules/BackButton";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { BorderCountryChips } from "./BorderCountryChips";
import { CountryFlag } from "./CountryFlag";
import { CountryStats } from "./CountryStats";
import { getCountryByName } from "@/utils/getCountryByName";
import { formatPopulation } from "@/utils/formatPopulation";
import { getCountryByCountryCode } from "@/utils/getCountryByCountryCode";

type TContext = {
    params: { countryName: string };
};

export default async function CountryDetails(context: TContext) {
    let countryDetails = await getCountryByName(context.params.countryName);

    if (!countryDetails) {
        // TODO
        try {
            countryDetails = await getCountryByCountryCode(
                context.params.countryName
            );

            if (!countryDetails) {
                return <>Error</>;
            }
        } catch (error) {
            return <>Error</>;
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

    // Could not get border country names from symbol because the endpoint is probably rate limited
    // Could get the names by adding time between api calls but does not seem worth it to do that. It
    // will just increase the page load time. To counter that, if I do not find the country by name,
    // I search by the symbol

    // const countryBorderPromises = countryDetails.borders.map((border) =>
    //     getCountryByCountryCode(border)
    // );
    // const borders = await Promise.all(countryBorderPromises);

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
