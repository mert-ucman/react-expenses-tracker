import Card from "./Card";
import AddExpense from "./AddExpense";
import IconWrapper from "./IconWrapper";

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
                    icon={
                        {
                            icon: `fa-solid fa-wallet fa-md`,
                            bgColor:`bg-[var(--icon-bg-blue)]`,
                            iconColor: `text-[var(--icon-blue)]`,
                            iconStatus: true,
                            rounded: `rounded-lg`
                        }

                    }
                    data={
                        {
                            type: `Toplam Harcama`,
                            amount: `₺1.170`,
                            subText: `Geçen haftaya göre`,
                            percentage: `%12`,
                            percentageColor: `text-[var(--success)]`
                        }
                    }
                />
                <Card
                    icon={
                        {
                            icon: `fa-solid fa-calendar fa-md`,
                            iconColor: `text-[var(--icon-green)]`,
                            bgColor:`bg-[var(--icon-bg-green)]`,
                            iconStatus: true,
                            rounded: `rounded-lg`
                        }

                    }
                    data={
                        {
                            type: `Bu Ay`,
                            amount: `₺3.250`,
                            subText: `Geçen aya göre`,
                            percentage: `%8`,
                            percentageColor: `text-[var(--danger)]`
                        }
                    }
                />
                <Card
                    icon={
                        {
                            icon: `fa-solid fa-turkish-lira fa-md`,
                            bgColor:`bg-[var(--icon-bg-purple)]`,
                            iconColor: `text-[var(--icon-purple)]`,
                            iconStatus: false,
                            rounded: `rounded-lg`
                        }

                    }
                    data={
                        {
                            type: `Harcama Sayıs`,
                            amount: `12`,
                            subText: `Bu ay toplam`,
                            percentage: `%8`,
                            percentageColor: `text-[var(--danger)]`
                        }
                    }
                />
            </div>
            <AddExpense />
            <div className="flex flex-col">
                <div >
                    <div>
                        <IconWrapper
                            icon={ `fa-solid fa-list-ul fa-md`}
                            color={`bg-[#242E40]`}
                            iconColor={`text-white`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackerWindow;