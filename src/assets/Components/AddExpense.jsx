import Card from "./Card";


function AddExpense({icon,color,rounded,extraClass,type,subText}) {
    return (
        <Card
            icon={icon}
            color={color}
            rounded={rounded}
            type={type}
            subText={subText}
            extraClass={extraClass}
        >
        </Card>
    )
}

export default AddExpense;