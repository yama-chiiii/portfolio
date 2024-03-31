export const History = () => {
    return (
        <div className="w-full h-auto z-20 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl">
            <div className="w-full h-40 bg-light-yellow" />
            <div className="w-full flex flex-row overflow-y-auto">
                <div className="w-56 flex flex-col mt-62 ml-32">
                    <div className="dot" />
                    <div className="custom-line" />
                    <div className="dot" />
                    <div className="custom-line" />
                    <div className="dot" />
                    <div className="custom-line" />
                    <div className="dot" />
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
                    <h2 className="w-80 my-16 text-vivid-pink border-b-4 border-light-yellow">2024年</h2>
                    <p className="mb-12">２月 　OLIENT TECH 就業型インターン 参加</p>
                </div>
            </div>
        </div>
    );
};
