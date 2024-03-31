"use client";
import { AllLanguage } from "@/app/component/allLanguage";
import { Header } from "@/app/component/header";
import { History } from "@/app/component/history";
import { Profile } from "@/app/component/profile";
import { Skill } from "@/app/component/skill";
import { Title } from "@/app/component/title";
import { useRef } from "react";

// import { Icon } from "./component/icon";

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
        <div className="max-w-full h-auto min-w-0 bg-light-pink">
            <div className="relative z-10">
                {/* <link href="https://use.fontawesome.com/releases/v6.2.0/css/all.css" rel="stylesheet" /> */}
                {/* <section className="h-screen w-full bg-light-pink select-none overflow-x-hidden"> */}
                {/* <div className="row flex whitespace-nowrap text-6xl p-12 absolute inset-0 z-0"> */}
                {/* <Icon /> */}
                {/* <Icon /> */}
                {/* </div> */}
                {/* </section> */}

                <Header
                    onProfileButtonClick={handleProfileButtonClick}
                    onHistoryButtonClick={handleHistoryButtonClick}
                    onSkillButtonClick={handleSkillButtonClick}
                    onLanguageButtonClick={handleLanguageButtonClick}
                />
                {/* <div className="flex justify-center mb-12 z-10">
                        <Image src="/name.svg" alt="Name" style={{ width: "w-full", height: "auto" }} />
                    </div> */}
                <div className="flex justify-center z-10 min-w-50%">
                    <div className="w-2/3 h-auto min-w-50% flex flex-col items-center bg-light-pink">
                        <div ref={profileRef} className="w-full min-w-50%">
                            <Title title="profile" subTitle="じぶんについて" />
                            <Profile />
                        </div>
                        <div ref={historyRef} className="w-full min-w-50%">
                            <Title title="history" subTitle="これまでのこと" />
                            <History />
                        </div>
                        <div ref={skillRef} className="w-full min-w-50%">
                            <Title title="skill" subTitle="べんきょうちゅう" />
                            <Skill />
                        </div>
                        <div ref={languageRef} className="w-full min-w-50%">
                            <Title title="language" subTitle="げんごたち" />
                            <AllLanguage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}