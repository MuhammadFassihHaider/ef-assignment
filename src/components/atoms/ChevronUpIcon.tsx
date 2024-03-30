import { IoChevronUp } from "react-icons/io5";

type TProps = Parameters<typeof IoChevronUp>[0];

export const ChevronUpIcon = (props: TProps) => {
    return <IoChevronUp {...props} />;
};
