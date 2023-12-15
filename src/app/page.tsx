import { Title } from "@/component/title";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-light-pink">
            <header className="h-92 flex justify-between items-center bg-light-pink">
                <img src="/heart.svg" alt="Heart" style={{ width: "auto", height: "72px" }} className="px-8" />
                <div className="flex flex-row items-center font-semibold text-4xl text-vivid-pink">
                    <button className="font-Dot">About</button>
                    <button className="px-32 font-Dot">Skill</button>
                </div>
            </header>
            <div className="w-full h-540 flex justify-center">
                <img src="/name.svg" alt="Name" style={{ width: "auto", height: "460px" }} className="px-8" />
            </div>
            <div className="flex justify-center">
                {/* ぷろふぃーる */}
                <div className="w-2/3 min-h-screen flex flex-col items-center bg-light-pink">
                    <Title title="profile" subTitle="自分について" />
                    <div className="w-full h-520 z-20 flex flex-col items-center my-20 bg-white font-Dot font-extrabold text-2xl shadow-pink">
                        <div className="w-full h-40  pb-12 bg-light-blue" />
                        <div className="w-150 h-150 mt-24 bg-light-pink">しゃしん</div>
                        <h2 className="mt-16">なまえ：ながやま ちほ</h2>
                        <h2 className="mt-16">ねんれい：１８さい</h2>
                        <h2 className="mt-16">たんじょうび：２００５/１２/２８</h2>
                        <h2 className="mt-16">しゅっしん：ふくおかけん</h2>
                        <h2 className="mt-16 mb-32">しょぞく：きたきゅうしゅうこうせん</h2>
                    </div>
                    {/* ↓余白を一旦divで作成している */}
                    <div className="w-full h-36" />

                    <div className="text-7xl font-Dot font-semibold text-vivid-pink">history</div>
                    <div className="mt-8 text-2xl font-Dot font-semibold text-red-pink">これまでのこと</div>
                    <div className="w-full h-520 z-20 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl shadow-pink">
                        <div className="w-full h-40 bg-light-yellow"></div>
                    </div>
                    <Title title="skill" subTitle="できること" />
                    <div className="w-full h-520 z-20 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl shadow-pink">
                        <div className="w-full h-40 bg-light-green"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
