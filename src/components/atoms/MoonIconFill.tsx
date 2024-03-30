import { IoMoonSharp } from "react-icons/io5";

type TProps = Parameters<typeof IoMoonSharp>[0] & {};

export const MoonIconFill = (props: TProps) => {
    return <IoMoonSharp {...props} height={20} width={20} />;
};
