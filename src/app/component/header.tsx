import Image from "next/image";
import { useEffect, useState } from "react";
import "./header.css";

type OnButtonClick = () => void;

type Props = {
    onProfileButtonClick: OnButtonClick;
    onHistoryButtonClick: OnButtonClick;
    onSkillButtonClick: OnButtonClick;
    onLanguageButtonClick: OnButtonClick;
};

export const Header = ({ onProfileButtonClick, onHistoryButtonClick, onSkillButtonClick, onLanguageButtonClick }: Props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            const targetElement = e.target as HTMLElement;
            if (!targetElement.closest(".menu-container")) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuOpen]);

    const Menu = () => {
        setMenuOpen(!menuOpen);
    };

    const [contentClass, setContentClass] = useState("");

    useEffect(() => {
        if (menuOpen) {
            setContentClass("show");
        } else if (!menuOpen && contentClass === "show") {
            setContentClass("hide");
        }
    }, [menuOpen, contentClass]);

    const onAnimationEnd = () => {
        if (contentClass === "hide") {
            setContentClass("");
        }
    };

    return (
        <div className="z-10 relative">
            <Image
                src="/name.svg"
                alt="Name"
                style={{ width: "auto", height: "160px" }}
                width={100}
                height={100}
                layout="responsive"
                className="w-full h-auto"
            />
            <button className={`hum ${menuOpen ? "open" : ""}`} onClick={Menu}>
                {menuOpen ? "✖" : "☰"}
            </button>
            {menuOpen && (
                <div className={`content ${contentClass}`} onAnimationEnd={onAnimationEnd}>
                    <div className="flex justify-center">
                        <Image
                            src="/heart.svg"
                            alt="heart"
                            style={{ width: "80px", height: "auto" }}
                            width={150} // 適切な幅を指定
                            height={50}
                            className="my-4"
                        />
                    </div>
                    <button className="px-32 font-Dot" onClick={onProfileButtonClick}>
                        profile
                    </button>
                    <button className="px-32 font-Dot" onClick={onHistoryButtonClick}>
                        history
                    </button>
                    <button className="px-32 font-Dot" onClick={onSkillButtonClick}>
                        skill
                    </button>
                    <button className="px-32 font-Dot" onClick={onLanguageButtonClick}>
                        language
                    </button>
                </div>
            )}
        </div>
    );
};
