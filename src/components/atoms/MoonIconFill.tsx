import { IoMoonSharp } from "react-icons/io5";

type Props = Parameters<typeof IoMoonSharp>[0] & {};

export const MoonIconFill = (props: Props) => {
    return <IoMoonSharp {...props} height={20} width={20} />;
};
