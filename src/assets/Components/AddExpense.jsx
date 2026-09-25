import IconWrapper from "./IconWrapper";
import { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

function AddExpense() {

    const { dispatch } = useContext(ExpenseContext);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    function handleAddExpense() {
        if (title.trim() === "") {
            alert("Harcama adı boş olamaz !");
            return;
        }
        if (amount === "" || amount <= 0) {
            alert("Geçerli bir tutar giriniz !");
            return;
        }
        if (category === "") {
            alert("Lütfen kategori seçiniz !")
            return;
        }
        dispatch({
            type: "ADD_EXPENSE",
            payload: {
                id: Date.now(),
                title: title,
                amount: Number(amount),
                category: category,
                date: new Date().toISOString()
            }
        })
        setTitle("");
        setAmount("");
        setCategory("");
    }

    return (
        <div className="main-div flex-col gap-y-2 h-fit!">
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
                <input value={title} type="text" name="expenseName" id="expenseName" placeholder="Örn. Fatura" className="expenseInput" onChange={(e) => setTitle(e.target.value)} />
                <input value={amount} type="number" name="expenseValue" id="expenseValue" placeholder="₺0" className="expenseInput" onChange={(e) => setAmount(e.target.value)} />
                <select value={category} className="expenseInput" name="expenseType" id="expenseType" onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled>Seçiniz</option>
                    <option value="market">Market</option>
                    <option value="transport">Ulaşım</option>
                    <option value="spor">Spor</option>
                    <option value="health">Sağlık</option>
                    <option value="other">Diğer</option>
                </select>
            </div>
            <button onClick={handleAddExpense}
                className="flex flex-1 xy-center gap-x-2 bg- p-2 rounded-lg bg-gradient-to-r from-[#4169FC] to-[#6654D9] outline outline-1 outline-transparent hover:outline-[#7C8FFF] hover:shadow-[0_0_20px_rgba(65,105,252,0.25)] transition-all duration-200 hover:cursor-pointer"><i className="fa-solid fa-plus fa-md"></i>Harcama Ekle
            </button>
        </div >
    )
}

export default AddExpense;