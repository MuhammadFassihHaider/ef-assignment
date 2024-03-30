type TProps = {
    imageSrc: string;
};

export const CountryFlag = ({ imageSrc }: TProps) => (
    <img
        src={imageSrc}
        alt="country flag"
        className="rounded-md shadow-md mb-8 lg:w-[500px]"
    />
);
