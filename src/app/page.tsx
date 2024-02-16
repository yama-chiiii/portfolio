"use client";
import { AllLanguage } from "@/app/component/allLanguage";
import { Header } from "@/app/component/header";
import { History } from "@/app/component/history";
import { Profile } from "@/app/component/profile";
import { Skill } from "@/app/component/skill";
import { Title } from "@/app/component/title";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-light-pink">
            <Header />
            <div className="flex justify-center mb-12">
                <div className="w-11/12 h-720 flex justify-center bg-white">
                    <img src="/name.svg" alt="Name" style={{ width: "w-full", height: "auto" }} />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-2/3 min-h-screen flex flex-col items-center bg-light-pink">
                    <Title title="profile" subTitle="じぶんについて" />
                    <div className="w-full h-520 flex flex-col my-20 bg-white font-Dot font-extrabold text-2xl shadow-pink">
                        <Profile />
                    </div>
                    <Title title="history" subTitle="これまでのこと" />
                    <History />
                    <Title title="skill" subTitle="べんきょうちゅう" />
                    <Skill />
                    <Title title="language" subTitle="げんごたち" />
                    <AllLanguage />
                </div>
            </div>
        </div>
    );
}
