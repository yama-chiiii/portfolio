"use client";
import { AllLanguage } from "@/app/component/allLanguage";
import { Header } from "@/app/component/header";
import { History } from "@/app/component/history";
import { Profile } from "@/app/component/profile";
import { Skill } from "@/app/component/skill";
import { Title } from "@/app/component/title";
import { useEffect, useRef, useState } from "react";
import { Loading } from "./component/loading";
// import { Icon } from "./component/icon";

export default function Home() {
    const profileRef = useRef<HTMLDivElement | null>(null);
    const historyRef = useRef<HTMLDivElement | null>(null);
    const skillRef = useRef<HTMLDivElement | null>(null);
    const languageRef = useRef<HTMLDivElement | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // データ読み込みをシミュレート
        const timer = setTimeout(() => {
            setIsLoading(false); // ローディング終了
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    // historyボタンが押されたときの処理
    const handleProfileButtonClick = () => {
        if (profileRef.current) {
            profileRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleHistoryButtonClick = () => {
        if (historyRef.current) {
            historyRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSkillButtonClick = () => {
        if (skillRef.current) {
            skillRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLanguageButtonClick = () => {
        if (languageRef.current) {
            languageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg_pattern Polka_v2">
            <div className="max-w-full h-auto min-w-0 z-10">
                {isLoading && (
                    <div className="loader-container">
                        <Loading />
                    </div>
                )}
                <div className="relative z-10">
                    <Header
                        onProfileButtonClick={handleProfileButtonClick}
                        onHistoryButtonClick={handleHistoryButtonClick}
                        onSkillButtonClick={handleSkillButtonClick}
                        onLanguageButtonClick={handleLanguageButtonClick}
                    />
                    <div className="main">
                        <div className="sub">
                            <div ref={profileRef} className="w-full min-w-50%">
                                <Title title="profile" subTitle="じぶんについて" />
                                <div className="element">
                                    <Profile />
                                </div>
                            </div>
                            <div ref={historyRef} className="w-full min-w-50%">
                                <Title title="history" subTitle="これまでのこと" />
                                <div className="element">
                                    <History />
                                </div>
                            </div>
                            <div ref={skillRef} className="w-full min-w-50%">
                                <Title title="skill" subTitle="べんきょうちゅう" />
                                <div className="element">
                                    <Skill />
                                </div>
                            </div>
                            <div ref={languageRef} className="w-full min-w-50%">
                                <Title title="language" subTitle="げんごたち" />
                                <div className="element">
                                    <AllLanguage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}