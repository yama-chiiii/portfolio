export default function Home() {
    return (
        <div className="w-full h-screen bg-red-200">
            <header className="h-16 flex justify-between bg-light-pink">
                <img src="/heart.svg" alt="Heart" style={{ width: "auto", height: "64px" }} />
                <div className="flex flex-row">
                    <div className="mx-4 font-Dot">About</div>
                    <div className="mx-4 font-Dot">Skill</div>
                </div>
            </header>
            <div className="flex justify-center items-center"></div>
        </div>
    );
}
