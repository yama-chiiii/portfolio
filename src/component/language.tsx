type Language = {
    language: string;
    heart: string;
};

export const Language: React.FC<Language> = ({ language, heart }) => {
    return (
        <div className="w-4/5 flex justify-center">
            <div className="w-4/5 h-200 flex flex-col items-center pt-36 w-2/5 rounded-3xl border-t-2 border-r-2 border-l-2 border-b-8 border-purple-pink text-4xl text-red-pink">
                <div>{language}</div>
                <div className="mt-20 text-red-600">{heart}</div>
            </div>
        </div>
    );
};
