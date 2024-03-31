"use client";

type TProps = {
    error: Error & { digest?: string };
    reset: () => void;
};
export default function CustomError({ error }: TProps) {
    let customError: TCustomError = { code: "", message: "" };
    try {
        customError = JSON.parse(error?.message);
    } catch (e) {
        customError.message = "Something went wrong!";
        customError.code = "500";
    }

    return (
        <main>
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="text-center flex text-gray-900 dark:text-white">
                    <h1 className="text-2xl font-medium mr-5 pr-[23px] leading-[49px] border-r border-gray-500">
                        {customError.code}
                    </h1>
                    <h2 className="text-sm leading-[49px]">
                        {customError.message}
                    </h2>
                </div>
            </div>
        </main>
    );
}
