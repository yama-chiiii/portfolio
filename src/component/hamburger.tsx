import { useState } from "react";

//import { useClient } from "react-server-dom-webpack/client";

//useClient();

export const HamburgerMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="cursor-pointer" onClick={toggleMenu}>
                ☰
            </div>

            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
                    {/* メニュー項目をここに追加 */}
                    <div className="p-4">Menu Item 1</div>
                    <div className="p-4">Menu Item 2</div>
                    {/* ... 追加のメニュー項目 ... */}
                </div>
            )}
        </div>
    );
};
