import Card from "./Card";
import AddExpense from "./AddExpense";

function TrackerWindow() {
    return (
        <div className="grid grid-cols-1 p-4 gap-y-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                    <div className="p-2 rounded-[var(--rounded-lg)] h-10 w-10 xy-center bg-[var(--logo)]">
                        <i className="fa-solid fa-chart-simple fa-lg text-white"></i>
                    </div>
                    <div className="xy-col-center items-start!">
                        <h3 className="text-xl font-bold">SpendIt</h3>
                        <p className="sub-text">Harcamalarınızı takip edin.</p>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <div className="p-2 rounded-[var(--rounded-lg)] h-10 w-10 xy-center bg-[var(--bills)]">
                        <i className="fa-regular fa-calendar fa-lg text-white"></i>
                    </div>
                    <div className="xy-col-center items-start!">
                        <h3 className="sub-text-white">4 Eylül 2026</h3>
                        <p className="sub-text">Perşembe</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-2 justify-between h-22">
                <Card
                    icon={`fa-solid fa-wallet fa-md`}
                    iconColor={`bg-[var(--icon-bg-blue)]`}
                    type={`Toplam Harcama`}
                    percentageColor={`text-[var(--success)]`}
                    amount={`₺1.170`}
                    subText={`Geçen haftaya göre`}
                    percentage={`%12`}
                    iconStatus={true}
                    rounded={`lg`}
                />
                <Card
                    icon={`fa-solid fa-calendar fa-md`}
                    iconColor={`bg-[var(--icon-bg-green)]`}
                    type={`Bu Ay`}
                    percentageColor={`text-[var(--danger)]`}
                    amount={`₺3.250`}
                    subText={`Geçen aya göre`}
                    percentage={`%8`}
                    iconStatus={true}
                    rounded={`lg`}
                />
                <Card
                    icon={`fa-solid fa-turkish-lira fa-md`}
                    iconColor={`bg-[var(--icon-bg-purple)]`}
                    type={`Harcama Sayısı`}
                    amount={`12`}
                    subText={`Bu ay toplam`}
                    iconStatus={false}
                    rounded={`lg`}
                />
            </div>
            <AddExpense
                icon={`fa-solid fa-plus`}
                color={`var(--logo)`}
                rounded={`2xl!`}
                type={`Yeni Harcama Ekle`}
                subText={`Harcamanı hızlıca ekle`}
                extraClass={`[&_h3]:text-[var(--text-primary)]! [&_h3]:text-[12px]!`}
            />
        </div>
    )
}

export default TrackerWindow;