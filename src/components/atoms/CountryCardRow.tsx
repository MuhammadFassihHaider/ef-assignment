type TProps = { title: string; value: string };

export const CardRow = ({ title, value }: TProps) => {
    return (
        <p className="mb-1 md:text-lg">
            <span className="font-semibold">{title}:</span> {value}
        </p>
    );
};