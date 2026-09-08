

function IconWrapper({icon,iconColor,color,rounded}) {
    return (
        <div className={`bg-[${color}] p-2 rounded-${rounded} h-8 w-8 xy-center ${iconColor}`}>
            <i className={`${icon} text-white opacity-75`}></i>
        </div>
    )
}

export default IconWrapper;