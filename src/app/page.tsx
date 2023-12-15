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
            <div className="w-full h-720 flex justify-center">
                <div className="bg-white">
                    <img src="/name.svg" alt="Name" style={{ width: "1200px", height: "auto" }} />
                    あとからどうにかしたいスペース
                </div>
            </div>
            <div className="flex justify-center">
                {/* ぷろふぃーる */}
                <div className="w-2/3 min-h-screen flex flex-col items-center bg-light-pink">
                    <Title title="profile" subTitle="じぶんについて" />
                    <div className="w-full h-520 flex flex-col items-center my-20 bg-white font-Dot font-extrabold text-2xl shadow-pink">
                        <div className="w-full h-40 pb-12 bg-light-blue" />

                        <img src="/Icon.svg" alt="icon" style={{ width: "auto", height: "150px" }} className="mt-24 border-4 rounded-full" />
                        {/* <div className="bg-light-pink">しゃしん</div> */}
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

                    {/* ↓余白を一旦divで作成している */}
                    <div className="w-full h-36" />
                    <Title title="skill" subTitle="べんきょうちゅう" />
                    <div className="w-full h-720 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl shadow-pink">
                        <div className="w-full h-40 bg-light-green" />
                        <div className="flex flex-col items-center">
                            <img src="/PC.svg" alt="PC" style={{ width: "auto", height: "160px" }} className="px-8 py-16 mt-12" />
                            <h2 className="text-red-pink">コーティング</h2>
                            <h3 className="px-20">HTML,CSSを使って、デザインを忠実に再現できるようになれるよう日々勉強中です！</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/pallet.svg" alt="PC" style={{ width: "auto", height: "200px" }} className="px-8 pt-16 mt-12" />
                            <h2 className="text-red-pink">webデザイン</h2>
                            <h3 className="px-20">
                                どんな人が、何に興味を持っていて、何を知りたいかを考えつつ、見てて楽しいwebサイトを作ることを目標としています！
                            </h3>
                        </div>
                    </div>

                    {/* ↓余白を一旦divで作成している */}
                    <div className="w-full h-36" />
                    <Title title="language" subTitle="げんごたち" />
                    <div className="w-full h-1200 flex justify-between">
                        <div className="w-2/5 h-320 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl shadow-pink">
                            <div className="w-full h-40 bg-light-purple" />
                        </div>
                        <div className="w-2/5 h-320 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl shadow-pink">
                            <div className="w-full h-40 bg-light-purple" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
