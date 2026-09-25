import Card from "./Card";
import AddExpense from "./AddExpense";
import IconWrapper from "./IconWrapper";
import Donut from "./PieChart";
import BottomNavBar from "./BottomNavBar";
import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

function TrackerWindow() {

    const { state } = useContext(ExpenseContext);

    return (
        <div className="h-dvh flex flex-col overflow-hidden scrollbar-none max-w-[1200px] mx-auto">
            <div className="flex flex-col flex-1 p-4 gap-y-4 min-h-0 overflow-y-auto h-max scrollbar-none">
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
                <div className="flex gap-x-2 justify-between h-max min-h-22 [&>div]:min-w-0 [&>div]:flex-1">
                    <Card
                        icon={
                            {
                                icon: `fa-solid fa-wallet fa-md`,
                                bgColor: `bg-[var(--icon-bg-blue)]`,
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
                                bgColor: `bg-[var(--icon-bg-green)]`,
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
                                bgColor: `bg-[var(--icon-bg-purple)]`,
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
                <div className="flex flex-col md:flex-row md:gap-x-2 gap-y-4 min-h-0 flex-1">
                    <div className="flex flex-col main-div flex-1 min-h-0 h-85 md:w-2/3">
                        <div className="flex justify-between border-b-1 pb-4 border-[var(--border)] mb-2">
                            <div className="flex gap-x-2">
                                <IconWrapper
                                    icon={`fa-solid fa-list-ul fa-md`}
                                    color={`bg-[#242E40]`}
                                    iconColor={`text-white`}
                                    rounded={`rounded-lg`}
                                />
                                <div className="flex flex-col justify-between">
                                    <h3 className="main-text text-[12px]!">Harcamalarım</h3>
                                    <p className="sub-text text-[10px]!">Tüm harcamalarını gör.</p>
                                </div>
                            </div>
                            <select name="expenseFilter" id="expenseFilter" className="expenseInput max-w-fit">
                                <option value="all">Tümü</option>
                                <option value="all">Beslenme</option>
                                <option value="all">Eğlence</option>
                                <option value="all">Ulaşım</option>
                                <option value="all">Eğitim</option>
                                <option value="all">Yaşam&Sağlık</option>
                            </select>
                        </div>
                        <div className="h-full overflow-scroll scrollbar-none">
                            {
                                state.expenses.map((expense) => (
                                    <div key={expense.id} className="flex justify-between border-b border-[var(--border)] py-1">
                                        <div className="flex gap-x-2">
                                            <IconWrapper
                                                icon={expense.icon}
                                                color={`bg-[#55463A]`}
                                                iconColor={`text-white`}
                                                rounded={`rounded-full`}
                                            />
                                            <div className="flex flex-col justify-between">
                                                <h3 className="main-text text-[12px]!">{expense.title}</h3>
                                                <p className="sub-text text-[10px]!">{expense.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex xy-center gap-x-4">
                                            <p className="text-[#F16D71] font-bold">₺{expense.amount}</p>
                                            <i className="fa-solid fa-chevron-right fa-xs text-gray-500"></i>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex md:flex-col gap-2 md:w-1/3 [&>div]:min-w-0 [&>div]:flex-1 md:[&>div:first-child]:flex-[2]">
                        <div className="main-div flex-col! md:gap-y-0 ">
                            <div className="flex items-center">
                                <IconWrapper
                                    icon={`fa-solid fa-chart-pie fa-sm`}
                                />
                                <div className="flex flex-col justify-between">
                                    <h3 className="main-text text-[12px]! md:text-lg!">Kategori Dağılımı</h3>
                                </div>
                            </div>
                            <div className="flex md:flex-col md:justify-between flex-1 min-w-0">
                                <div className="shrink-0">
                                    <Donut width={75} height={75} />
                                </div>
                                <div className="flex flex-col md:flex-1 w-full md:justify-around md:[&_.dots]:scale-200">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-x-2">
                                            <div className="dots bg-green-500 rounded-full w-2 h-2"></div>
                                            <p className="sub-text text-[10px]!">Yiyecek</p>
                                        </div>
                                        <p className="sub-text text-[10px]!">%42</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-div flex-col!">
                            <div className="flex flex-col items-start">
                                <IconWrapper
                                    icon={`fa-solid fa-chart-simple fa-sm`}
                                />
                                <div className="flex items-end">
                                    <div className="flex flex-col justify-between w-[70%]">
                                        <h3 className="main-text text-[11px]!">Küçük adımlar,</h3>
                                        <h3 className="main-text text-[11px]!">büyük farklar.</h3>
                                        <p className="sub-text text-[10px]! mt-1">Harcamalarını takip ederek daha bilinçli bir gelecek oluştrabilirsin.</p>
                                    </div>
                                    <div className="w-[30%]">
                                        <img src="./src/assets/img/plant.png" alt="" className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavBar />
        </div>
    )
}

export default TrackerWindow;