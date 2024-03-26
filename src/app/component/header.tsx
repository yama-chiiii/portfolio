import { useEffect, useState } from "react";

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

    return (
        <div className="z-10 relative">
            <img src="/name.svg" alt="Name" className="w-full h-auto" />
            <button className="absolute top-0 right-0 m-4 p-2" style={{ fontFamily: "Dot", fontSize: "16px" }} onClick={Menu}>
                ☰
            </button>
            {menuOpen && (
                <div className="absolute top-0 right-0 mt-4 flex flex-col bg-white border border-gray-300 rounded-md shadow-md">
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
