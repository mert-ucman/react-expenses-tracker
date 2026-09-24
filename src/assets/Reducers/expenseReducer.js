


function expenseReducer(state, action) {
    switch (action.type) {
        case "ADD_EXPENSE":
            return { // Yeni değer ↓
                ...state,
                expenses: [...state.expenses,action.payload]
            }
        default:
            return state;
    }
}

export default expenseReducer;

/*Reducer state'i kendisi kalıcı bir yerde saklamaz. Reducer, kendisine verilen mevcut state ve action'a göre yeni state'i hesaplayıp geri döndürür. React ise dönen sonucu useReducerın state'i olarak yönetir.*/ 