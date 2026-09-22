

function IconWrapper({icon,iconColor,color,rounded}) {
    return (
        <div className={`${color} p-2 ${rounded} h-8 w-8 xy-center md:h-12 md:w-12`}>
            <i className={`${icon} ${iconColor} md:scale-150`}></i>
        </div>
    )
}

export default IconWrapper;