import Card from "./Card";


function TrackerWindow() {
    return (
        <div className="grid grid-cols-1 p-4 gap-y-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-x-3">
                    <div className="p-2 rounded-[var(--rounded-xl)] h-14 w-14 xy-center bg-[var(--logo)]">
                        <i className="fa-solid fa-chart-simple fa-xl text-white"></i>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-bold">SpendIt</h3>
                        <p className="sub-text">Harcamalarınızı takip edin.</p>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <div className="xy-center">
                        <i className="fa-regular fa-calendar fa-xl"></i>
                    </div>
                    <div>
                        <h3 className="main-text">4 Eylül 2026</h3>
                        <p className="sub-text">Perşembe</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-4">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default TrackerWindow;