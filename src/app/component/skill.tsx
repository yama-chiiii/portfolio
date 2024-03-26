import Image from "next/image";

export const Skill = () => {
    return (
        <div className="w-full h-720 my-20 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl shadow-pink">
            <div className="w-full h-40 bg-light-green" />
            <div className="flex flex-col items-center">
                <Image src="/PC.svg" alt="PC" style={{ width: "auto", height: "160px" }} className="px-8 py-16 mt-12" />
                <h2 className="text-red-pink">コーティング</h2>
                <h3 className="px-20">HTML,CSSを使って、デザインを忠実に再現できるようになれるよう日々勉強中です！</h3>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/pallet.svg" alt="PC" style={{ width: "auto", height: "200px" }} className="px-8 pt-16 mt-12" />
                <h2 className="text-red-pink">webデザイン</h2>
                <h3 className="px-20">
                    どんな人が、何に興味を持っていて、何を知りたいかを考えつつ、見てて楽しいwebサイトを作ることを目標としています！
                </h3>
            </div>
        </div>
    );
};
