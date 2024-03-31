type TDropdownItem<T, U> = {
    key: T;
    value: U;
};

type TCountryFlag = {
    png: string;
    svg: string;
    alt: string;
};

type TNativeName = {
    official: string;
    common: string;
};

type TCurrencyDetails = {
    name: string;
    symbol: string;
};

type TCountryName = {
    common: string;
    official: string;
    nativeName: Record<string, TNativeName>;
};

type TCountries = {
    flags: TCountryFlag;
    name: TCountryName;
    capital: string[];
    population: number;
    region: string;
}[];

type TCountry = {
    flags: TCountryFlag;
    name: TCountryName;
    tld: string[];
    currencies: Record<string, TCurrencyDetails>;
    capital: string[];
    subregion: string;
    languages: Record<string, string>;
    borders: string[];
    flag: string;
    population: number;
    region: string;
};
