export const getAllCountries = async (): Promise<TError<TCountries>> => {
    try {
        const response = await fetch(
            "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region"
        );

        if (!response.ok) {
            return {
                hasError: true,
                code: response.status,
                message: response.statusText || "Could not fetch countries!",
            };
        }

        const data: TCountries = await response.json();

        if (data.length === 0) {
            return {
                hasError: true,
                code: 500,
                message: "Something went wrong!",
            };
        }

        return { data, hasError: false };
    } catch (error) {
        console.log(error);
        return {
            hasError: true,
            code: 500,
            message: "Something went wrong!",
        };
    }
};
