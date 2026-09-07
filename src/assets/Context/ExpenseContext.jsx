import { createContext, useReducer } from "react";
import expenseReducer from "../Reducers/expenseReducer";


const ExpenseContext = createContext();
const initialState = {
    expenses:{
        id:0,
        title:"",
        amount:0,
        category:"",
        date:""
    }
};

function ExpenseContextProvider({ children }) {

    const [state, dispatch] = useReducer(expenseReducer, initialState);

    return (
        <ExpenseContext.Provider value={{ state, dispatch }}>


        
        {children}

        </ExpenseContext.Provider>
    )


}

export default ExpenseContextProvider;