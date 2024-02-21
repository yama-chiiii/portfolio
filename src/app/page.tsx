"use client";
import { AllLanguage } from "@/app/component/allLanguage";
import { Header } from "@/app/component/header";
import { History } from "@/app/component/history";
import { Profile } from "@/app/component/profile";
import { Skill } from "@/app/component/skill";
import { Title } from "@/app/component/title";
import { useRef } from "react";

export default function Home() {
    const profileRef = useRef<HTMLDivElement | null>(null);
    const historyRef = useRef<HTMLDivElement | null>(null);
    const skillRef = useRef<HTMLDivElement | null>(null);
    const languageRef = useRef<HTMLDivElement | null>(null);

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
        <div className="w-full min-h-screen bg-light-pink">
            <Header
                onProfileButtonClick={handleProfileButtonClick}
                onHistoryButtonClick={handleHistoryButtonClick}
                onSkillButtonClick={handleSkillButtonClick}
                onLanguageButtonClick={handleLanguageButtonClick}
            />
            <div className="flex justify-center mb-12">
                <div className="w-11/12 h-720 flex justify-center bg-white">
                    <img src="/name.svg" alt="Name" style={{ width: "w-full", height: "auto" }} />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-2/3 min-h-screen flex flex-col items-center bg-light-pink">
                    <div ref={profileRef} className="w-full">
                        <Title title="profile" subTitle="じぶんについて" />
                        <Profile />
                    </div>
                    <div ref={historyRef} className="w-full">
                        <Title title="history" subTitle="これまでのこと" />
                        <History />
                    </div>
                    <div ref={skillRef} className="w-full">
                        <Title title="skill" subTitle="べんきょうちゅう" />
                        <Skill />
                    </div>
                    <div ref={languageRef} className="w-full">
                        <Title title="language" subTitle="げんごたち" />
                        <AllLanguage />
                    </div>
                </div>
            </div>
        </div>
    );
}
