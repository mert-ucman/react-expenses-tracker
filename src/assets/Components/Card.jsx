import IconWrapper from "./IconWrapper";


function Card({icon,data}) {
    return (
        <div className="w-auto h-auto">
            <div className="main-div">
                <div className="flex flex-col justify-between">
                    <IconWrapper 
                        icon={icon.icon}
                        iconColor={icon.iconColor}
                        color={icon.bgColor}
                        rounded={icon.rounded}
                    />
                    <div className={`flex items-center gap-x-0.5 ${data.percentageColor}`}>
                        {
                            icon.iconStatus && (<i className="fa-solid fa-arrow-trend-up fa-2xs"></i>)
                        }
                        <p className="text-[10px]">{data.percentage}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className={`main-text-gray`}>{data.type}</h3>
                        <p className="sub-text-white">{data.amount}</p>
                    </div>
                    <p className="sub-text text-[8px]!">{data.subText}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;