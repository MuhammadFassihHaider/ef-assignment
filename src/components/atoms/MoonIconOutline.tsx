import { IoMoonOutline } from "react-icons/io5";


type Props = Parameters<typeof IoMoonOutline>[0] & {};

export const MoonIconOutline = (props: Props) => {
    return <IoMoonOutline {...props} height={20} width={20} />;
};
