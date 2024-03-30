type TProps = {
    imageSrc: string;
};

export const CountryFlag = ({ imageSrc }: TProps) => (
    <section>
        <img
            src={imageSrc}
            alt="country flag"
            className="rounded-md shadow-md mb-8"
        />
    </section>
);
