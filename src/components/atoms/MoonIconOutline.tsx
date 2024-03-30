import { IoMoonOutline } from "react-icons/io5";


type TProps = Parameters<typeof IoMoonOutline>[0] & {};

export const MoonIconOutline = (props: TProps) => {
    return <IoMoonOutline {...props} height={20} width={20} />;
};
