import { Language } from "./language";

export const AllLanguage = () => {
    return (
        <div className="w-full h-900 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl shadow-pink">
            <div className="w-full h-40 bg-light-purple" />
            <div className="w-4/5 min-h-screen">
                <div className="w-full h-300 mt-20 flex  justify-between ">
                    <Language language="HTML" overview="言語の説明" heart="♥♥♥"></Language>
                    <Language language="CSS" overview="言語の説明" heart="♥♥♥"></Language>
                </div>
                <div className="w-full h-300 mt-20 flex justify-between ">
                    <Language language="TypeScript" overview="言語の説明" heart="♥♥♥"></Language>
                    <Language language="JavaScript" overview="言語の説明" heart="♥♥♡"></Language>
                </div>
                <div className="w-full h-300 mt-20 flex justify-between ">
                    <Language language="C" overview="言語の説明" heart="♥♥♡"></Language>
                    <Language language="C++" overview="言語の説明" heart="♥♡♡"></Language>
                </div>
            </div>
        </div>
    );
};
