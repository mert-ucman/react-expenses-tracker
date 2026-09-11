import IconWrapper from "./IconWrapper";


function AddExpense() {
    return (
        <div className="main-div flex-col gap-y-2">
            <div className="flex gap-x-2">
                <IconWrapper
                    icon={`fa-solid fa-plus fa-md`}
                    iconColor={`text-white`}
                    color={`bg-[var(--logo)]`}
                    rounded={`rounded-full`}
                />
                <div className="flex flex-col justify-between">
                    <h3 className="main-text text-[12px]!">Yeni Harcama Ekle</h3>
                    <p className="sub-text text-[10px]!">Harcamanı hızlıca ekle</p>
                </div>

            </div>
            <div className="flex gap-x-2">
                <input type="text" name="expenseName" id="expenseName" placeholder="Örn. Fatura" className="expenseInput" />
                <input type="text" name="expenseValue" id="expenseValue" placeholder="₺0" className="expenseInput" />
                <select className="expenseInput" name="expenseType" id="expenseType">
                    <option value="food">Yiyecek</option>
                </select>
            </div>
            <button
                className="flex flex-1 xy-center gap-x-2 bg- p-2 rounded-lg bg-gradient-to-r from-[#4169FC] to-[#6654D9] outline outline-1 outline-transparent hover:outline-[#7C8FFF] hover:shadow-[0_0_20px_rgba(65,105,252,0.25)] transition-all duration-200 hover:cursor-pointer"><i className="fa-solid fa-plus fa-md"></i>Harcama Ekle
            </button>
        </div>
    )
}

export default AddExpense;