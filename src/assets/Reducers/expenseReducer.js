


function expenseReducer(state, action) {
    switch (action.type) {
        case "ADD_EXPENSE":
            return { // Yeni değer ↓ //payload burada taşınan öğe
                ...state,
                expenses: [...state.expenses, action.payload] //göndermiş oldugum item
            }
        case "DELETE_EXPENSE":


            return {
                ...state,
                expenses: state.expenses.filter(
                    expense => expense.id !== action.payload //göndermiş oldugum id
                )
            }
        default:
            return state;
    }
}

export default expenseReducer;

/*Reducer state'i kendisi kalıcı bir yerde saklamaz. Reducer, kendisine verilen mevcut state ve action'a göre yeni state'i hesaplayıp geri döndürür. React ise dönen sonucu useReducerın state'i olarak yönetir.*/ 