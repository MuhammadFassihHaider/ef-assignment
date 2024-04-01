import Image from "next/image";

type TProps = {
    imageSrc: string;
    imageAlt: string | "";
};

export const CountryFlag = ({ imageSrc, imageAlt }: TProps) => (
    <Image
        src={imageSrc}
        alt={imageAlt || "country flag"}
        className="rounded-md shadow-md mb-8 w-full md:w-[600px] object-cover object-center overflow-hidden"
        height={400}
        width={600}
    />
);
