// Formats population string by adding commas every three digits.
export const formatPopulation = (population: string) => {
    const formattedPopulation: string = population.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
    );

    return formattedPopulation;
};
