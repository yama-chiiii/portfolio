type Title = {
    title: string;
    subTitle: string;
};

export const Title: React.FC<Title> = ({ title, subTitle }) => {
    return (
        <div>
            {/* 余白がうまくできないので、heightで代用。どうにか解決したかった。 */}
            <div className="w-full h-40"></div>
            <div className="flex flex-col items-center">
                <div className="text-7xl font-Dot font-semibold text-vivid-pink">{title}</div>
                <div className="mt-8 text-2xl font-Dot font-semibold text-red-pink">{subTitle}</div>
            </div>
        </div>
    );
};
