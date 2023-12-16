"use client";
import { Language } from "@/component/language";
import { Title } from "@/component/title";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-light-pink">
            <header className="h-92 flex justify-between items-center bg-light-pink">
                <img src="/heart.svg" alt="Heart" style={{ width: "auto", height: "72px" }} className="px-8" />
                <div className="flex flex-row items-center font-semibold text-4xl text-vivid-pink">
                    <button className="font-Dot">Profile</button>
                    <button className="px-32 font-Dot">Skill</button>
                </div>
            </header>
            <div className="flex justify-center">
                <div className="w-11/12 h-720 flex justify-center bg-white">
                    <img src="/name.svg" alt="Name" style={{ width: "w-full", height: "auto" }} />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-2/3 min-h-screen flex flex-col items-center bg-light-pink">
                    {/* ぷろふぃーる */}
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

                    {/* ひすとりー */}
                    <Title title="history" subTitle="これまでのこと" />
                    {/* <div className="text-7xl font-Dot font-semibold text-vivid-pink">history</div>
                    <div className="mt-8 text-2xl font-Dot font-semibold text-red-pink">これまでのこと</div> */}
                    <div className="w-full h-720 z-20 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl shadow-pink">
                        <div className="w-full h-40 bg-light-yellow" />
                        <div className="w-full flex flex-row">
                            <div className="w-1/5">
                                {/* <div
                                    className="absolute left-1/2 top-0 bg-light-yellow w-1 h-full transform -translate-x-1/2 vertical-line"
                                    style={{ height: `${scrollY}px` }}
                                ></div> */}
                            </div>
                            <div className="mx-4 my-16">
                                <h2 className="w-80 my-16 text-vivid-pink border-b-4 border-light-yellow">2021年</h2>
                                <p className="mb-12">４月 　北九州高専 入学 </p>
                                <p className="mb-12">６月 　コンピューター研究部 入部 </p>
                                <h2 className="w-80 my-16 text-vivid-pink border-b-4 border-light-yellow">2022年</h2>
                                <p className="mb-12">９月 　ハックツハッカソン ～プテラカップ～ 参加 </p>
                                <h2 className="w-80 my-16 text-vivid-pink border-b-4 border-light-yellow">2023年</h2>
                                <p className="mb-12">２月 　PenguinHack 企業賞 受賞 </p>
                                <p className="mb-12">４月 　ハックツハッカソン ～ジンベエカップ～ 参加</p>
                                <p className="mb-12">９月 　アークエルテクノロジーズ株式会社 就業型インターン 参加</p>
                            </div>
                        </div>
                    </div>

                    {/* ↓余白を一旦divで作成している */}
                    <div className="w-full h-36" />

                    {/* すきる */}
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

                    {/* げんご */}
                    <div className="w-full h-36" />
                    <Title title="language" subTitle="げんごたち" />
                    <div className="w-full h-720 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl shadow-pink">
                        <div className="w-full h-40 bg-light-purple" />
                        <div className="w-4/5 h-300 mt-20 flex justify-between ">
                            <Language language="HTML" heart="♥♥♥"></Language>
                            <Language language="CSS" heart="♥♥♥"></Language>
                        </div>
                        <div className="w-4/5 h-300 mt-20 flex justify-between ">
                            <Language language="TypeScript" heart="♥♥♥"></Language>
                            <Language language="JavaScript" heart="♥♥♡"></Language>
                        </div>
                        <div className="w-4/5 h-300 mt-20 flex justify-between ">
                            <Language language="C" heart="♥♥♡"></Language>
                            <Language language="C++" heart="♥♡♡"></Language>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
