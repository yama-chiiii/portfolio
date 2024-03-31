import { Language } from "./language";

export const AllLanguage = () => {
    return (
        <div className="w-full h-auto mt-20 mb-36 flex flex-col items-center bg-white font-Dot font-extrabold text-2xl">
            <div className="w-full h-40 bg-light-purple" />
            <div className="w-4/5 h-auto">
                <div className="w-full h-auto my-24 flex  justify-between ">
                    <Language language="HTML" overview="ウェブページの構造を定義するマークアップ言語" heart="♥♥♥"></Language>
                    <Language language="CSS" overview="スタイルやレイアウトを指定するスタイルシート言語" heart="♥♥♥"></Language>
                </div>
                <div className="w-full h-auto my-24 flex justify-between ">
                    <Language
                        language="TypeScript"
                        overview="JavaScriptに型システムとクラスベースオブジェクト指向を加えた言語"
                        heart="♥♥♥"
                    ></Language>
                    <Language language="JavaScript" overview="ウェブページを動的にするためのスクリプティング言語" heart="♥♥♡"></Language>
                </div>
                <div className="w-full h-auto my-24 flex justify-between ">
                    <Language
                        language="C"
                        overview="汎用のプロシージャ型プログラミング言語で、システムプログラミングに広く用いられる"
                        heart="♥♥♡"
                    ></Language>
                    <Language
                        language="C++"
                        overview="C言語にクラスやその他の機能を追加したオブジェクト指向プログラミング言語"
                        heart="♥♡♡"
                    ></Language>
                </div>
            </div>
        </div>
    );
};
