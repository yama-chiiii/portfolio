import Image from "next/image";

export const Profile = () => {
    return (
        <div className="w-full h-520 flex flex-col items-center my-20 bg-white font-Dot font-extrabold text-2xl shadow-pink">
            {/* <div className="w-full flex flex-col items-center"> */}
            <div className="w-full h-40 pb-12 bg-light-blue" />
            <Image src="/Icon.svg" alt="icon" style={{ width: "auto", height: "150px" }} className="mt-24 border-4 rounded-full" />
            <h2 className="mt-16">なまえ：ながやま ちほ</h2>
            <h2 className="mt-16">ねんれい：１８さい</h2>
            <h2 className="mt-16">たんじょうび：２００５/１２/２８</h2>
            <h2 className="mt-16">しゅっしん：ふくおかけん</h2>
            <h2 className="mt-16 mb-32">しょぞく：きたきゅうしゅうこうせん</h2>
        </div>
        // </div>
    );
};
