export const getCountryByName = async (
    name: string
): Promise<TError<TCountry>> => {
    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,subregion,currencies,languages,flag,borders,tld,region`
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
        return { data: data[0], hasError: false };
    } catch (error) {
        console.log(error);
        return {
            hasError: true,
            code: 500,
            message: "Something went wrong!",
        };
    }
};
