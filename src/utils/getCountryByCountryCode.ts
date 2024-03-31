export const getCountryByCountryCode = async (code: string) => {
    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${code}?fields=name,capital,population,flags,subregion,currencies,languages,flag,borders,tld,region`
        );

        if (!response.ok) {
            return null;
        }
        // TODO: handle error since single country endpoint returns array.
        // what if the user changes the url by themselves
        const data: TCountry = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
