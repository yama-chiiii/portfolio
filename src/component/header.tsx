export const Header = () => {
    return (
        <div>
            <header className="h-92 flex justify-between items-center bg-light-pink">
                <img src="/heart.svg" alt="Heart" style={{ width: "auto", height: "72px" }} className="px-8" />
                <div className="flex flex-row items-center font-semibold text-4xl text-vivid-pink">
                    <button className="font-Dot">Profile</button>
                    <button className="px-32 font-Dot">Skill</button>
                </div>
            </header>
        </div>
    );
};
