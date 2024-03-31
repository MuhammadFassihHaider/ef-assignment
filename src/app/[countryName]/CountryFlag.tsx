type TProps = {
    imageSrc: string;
    imageAlt: string | "";
};

export const CountryFlag = ({ imageSrc, imageAlt }: TProps) => (
    <img
        src={imageSrc}
        alt={imageAlt || "country flag"}
        className="rounded-md shadow-md mb-8 w-[600px] h-[400px] object-cover object-center overflow-hidden"
    />
);
