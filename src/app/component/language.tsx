type Language = {
    language: string;
    overview: string;
    heart: string;
};

export const Language: React.FC<Language> = ({ language, overview, heart }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-4/5 max-h-240 flex flex-col items-center pt-36 rounded-3xl border-t-2 border-r-2 border-l-2 border-b-8 border-purple-pink">
                <div className="flex flex-wrap text-3xl text-red-pink">{language}</div>
                <div className="flex flex-wrap text-xs text-black p-12">{overview}</div>
                <div className="mt-8 text-red-600">{heart}</div>
            </div>
        </div>
    );
};
