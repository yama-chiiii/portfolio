import "./history.css";

export const History = () => {
    return (
        <div className="w-full h-auto z-20 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl">
            <div className="w-full h-40 bg-light-yellow" />
            <div className="w-full flex flex-row overflow-y-auto">
                <div className="line">
                    <div className="dot" />
                    <div className="custom-line" />
                    <div className="dot" />
                    <div className="custom-line" />
                    <div className="dot" />
                    <div className="custom-line" />
                    <div className="dot" />
                </div>
                <div className="w-4/5 mr-4 my-16">
                    <h2 className="w-80 my-16 text-vivid-pink border-b-4 border-light-yellow">2021年</h2>
                    <div className="event-entry mb-12">
                        <span className="month">４月</span>
                        <span className="event-details">北九州高専 入学</span>
                    </div>
                    <div className="event-entry mb-12">
                        <span className="month">６月</span>
                        <span className="event-details">コンピューター研究部 入部</span>
                    </div>
                    <h2 className="w-80 my-16 text-vivid-pink border-b-4 border-light-yellow">2022年</h2>
                    <div className="event-entry mb-12">
                        <span className="month">９月</span>
                        <span className="event-details">ハックツハッカソン ～プテラカップ～ 参加</span>
                    </div>
                    <h2 className="w-80 my-16 text-vivid-pink border-b-4 border-light-yellow">2023年</h2>
                    <div className="event-entry mb-12">
                        <span className="month">２月</span>
                        <span className="event-details">PenguinHack 企業賞 受賞</span>
                    </div>
                    <div className="event-entry mb-12">
                        <span className="month">４月</span>
                        <span className="event-details">ハックツハッカソン ～ジンベエカップ～ 参加</span>
                    </div>
                    <div className="event-entry mb-12">
                        <span className="month">９月</span>
                        <span className="event-details">アークエルテクノロジーズ株式会社 就業型インターン 参加</span>
                    </div>
                    <h2 className="w-80 my-16 text-vivid-pink border-b-4 border-light-yellow">2024年</h2>
                    <div className="event-entry mb-12">
                        <span className="month">２月</span>
                        <span className="event-details">OLIENT TECH 就業型インターン 参加</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
