export const getAllCountries = async () => {
    try {
        const response = await fetch(
            "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region"
        );

        if (!response.ok) {
            return null;
        }

        const data: TCountries = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
