export const getCountryByName = async (
    name: string
): Promise<TError<TCountry>> => {
    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${name}?fullText=truefields=name,capital,population,flags,subregion,currencies,languages,borders,tld,region,ccn3`
        );

        if (!response.ok) {
            return {
                hasError: true,
                code: response.status,
                message:
                    response.statusText || "Could not get country details!",
            };
        }

        const data: TCountry[] = await response.json();

        if (!data?.[0].name) {
            return {
                hasError: true,
                code: 500,
                message: "Something went wrong!",
            };
        }
        const closestCountryToName = data.find(
            (country) =>
                country.name.official.toLowerCase() === name.toLowerCase()
        );

        if (closestCountryToName) {
            return { data: closestCountryToName, hasError: false };
        } else {
            return { data: data[0], hasError: false };
        }
    } catch (error) {
        console.log(error);
        return {
            hasError: true,
            code: 500,
            message: "Something went wrong!",
        };
    }
};
