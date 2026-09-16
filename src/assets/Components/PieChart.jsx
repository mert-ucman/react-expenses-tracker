import {
    ResponsiveContainer,
    PieChart,
    Pie,
} from "recharts";

const data = [
    { name: "Yiyecek", value: 42, fill: "#2BC88D" },
    { name: "Eğlence", value: 18, fill: "#726FFE" },
    { name: "Ulaşım", value: 12, fill: "#247FFD" },
    { name: "Diğer", value: 28, fill: "#556480" }
]

function Donut({width,height}) {
    return (
        <ResponsiveContainer width={width} height={height}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={17}
                    outerRadius={30}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Donut;