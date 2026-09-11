

function IconWrapper({icon,iconColor,color,rounded}) {
    return (
        <div className={`${color} p-2 ${rounded} h-8 w-8 xy-center`}>
            <i className={`${icon} ${iconColor}`}></i>
        </div>
    )
}

export default IconWrapper;