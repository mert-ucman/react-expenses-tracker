



function Card({icon,iconColor,type,percentage,percentageColor,amount,time,iconStatus}) {
    return (
        <div className="w-[33.33%] h-full">
            <div className="h-full flex bg-[var(--bg-card)] rounded-[var(--rounded-xl)] border-[var(--border)] border-1 p-2 gap-x-2">
                <div className="flex flex-col justify-between">
                    <div className={`p-2 rounded-lg h-8 w-8 xy-center ${iconColor}`}>
                        <i className={`${icon} text-white opacity-75`}></i>
                    </div>
                    <div className={`flex items-center gap-x-0.5 ${percentageColor}`}>
                        {
                            iconStatus && (<i className="fa-solid fa-hammer fa-2xs"></i>)
                        }
                        <p className="text-[10px]">{percentage}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="">
                        <h3 className="main-text-gray">{type}</h3>
                        <p className="sub-text-white">{amount}</p>
                    </div>
                    <p className="sub-text text-[8px]!">{time}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;