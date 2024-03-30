import { IoChevronDown } from "react-icons/io5";

type TProps = Parameters<typeof IoChevronDown>[0];

export const ChevronDownIcon = (props: TProps) => {
    return <IoChevronDown {...props} />;
};
