



function Card() {
    return (
        <div className="w-auto">
            <div className="flex bg-[var(--bg-card)] rounded-[var(--rounded-xl)] border-[var(--border)] border-1 p-4 gap-x-4">
                <div className="flex flex-col justify-between">
                    <div className="p-2 rounded-xl h-12 w-12 xy-center bg-[var(--icon-bg-blue)]">
                        <i className="fa-solid fa-wallet fa-xl text-white opacity-75"></i>
                    </div>
                    <div className="flex items-center gap-x-2 text-[var(--success)]">
                        <i className="fa-solid fa-hammer fa-xs"></i>
                        <p className="">%12</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="">
                        <h3 className="main-text-gray">Toplam <br />Harcama</h3>
                        <p className="text-2xl font-bold">₺1.170</p>
                    </div>
                    <p className="sub-text">Geçen haftaya göre</p>
                </div>
            </div>
        </div>
    )
}

export default Card;