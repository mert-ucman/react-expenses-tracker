import IconWrapper from "./IconWrapper";


function Card({icon,iconColor,type,percentage,percentageColor,amount,subText,iconStatus,color,rounded,extraClass}) {
    return (
        <div className={`w-auto h-auto`}>
            <div className="h-full flex bg-[var(--bg-card)] rounded-[var(--rounded-xl)] border-[var(--border)] border p-2 gap-x-2">
                <div className="flex flex-col justify-between">
                    <IconWrapper 
                        icon={icon}
                        iconColor={iconColor}
                        color={color}
                        rounded={rounded}
                    />
                    <div className={`flex items-center gap-x-0.5 ${percentageColor}`}>
                        {
                            iconStatus && (<i className="fa-solid fa-hammer fa-2xs"></i>)
                        }
                        <p className="text-[10px]">{percentage}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className={`${extraClass}`}>
                        <h3 className={`main-text-gray`}>{type}</h3>
                        <p className="sub-text-white">{amount}</p>
                    </div>
                    <p className="sub-text text-[8px]!">{subText}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;