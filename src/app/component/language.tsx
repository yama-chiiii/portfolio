import "./language.css";

type Language = {
    language: string;
    overview: string;
    heart: string;
};

export const Language: React.FC<Language> = ({ language, overview, heart }) => {
    const formatLanguageName = (name: string) => {
        if (name === "TypeScript") {
            return (
                <>
                    Type
                    <br />
                    Script
                </>
            ); // TypeScriptの間に改行を挿入
        } else if (name === "JavaScript") {
            return (
                <>
                    Java
                    <br />
                    Script
                </>
            ); // JavaScriptの間に改行を挿入
        } else {
            return name; // それ以外の言語名はそのまま返す
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-4/5 max-h-240 flex flex-col items-center pt-36 rounded-3xl border-t-2 border-r-2 border-l-2 border-b-8 border-purple-pink">
                <div className="flex flex-wrap text-3xl text-red-pink">{formatLanguageName(language)}</div>
                <div className="flex flex-wrap text-xs text-black p-12">{overview}</div>
                <div className="mt-8 mb-16 text-red-600">{heart}</div>
            </div>
        </div>
    );
};
