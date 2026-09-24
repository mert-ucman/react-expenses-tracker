import { createContext, useReducer } from "react";
import expenseReducer from "../Reducers/expenseReducer";


export const ExpenseContext = createContext();
const initialState = {
    expenses: []
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

// Uygulamanın verisi başlangıçta ne? → initialState

//expenseReducer'daki olaylar gerçekleştiğinde return edilen duruma göre state dönecek o state'i de state'e atacak
//Yeni React'a şunu diyoruz, Benim bir state'im olacak (expenseReducer'dan return edilen). Bu state'in nasıl değişeceğine expenseReducer karar verecek ve başlangıç değeri de initialState olacak.

//state → mevcut veri
//dispatch → state'in değiştirilmesini istemek için kullanılacak fonksiyon
//expenseReducer → Tamam ne yapılması istendi ? buna göre state'i nasıl değiştireceğim ? diye karar veren fonksiyon

//ExpenseContext.Provider ise state ve dispatch'i alır ve altındaki children'a (children'i de ana function ile parametre olarak aldı)'a dağıtıma açıyorum


//ekle sil güncelle için tek tek state açabiliriz ama proje büyüdükçe bunları zor yönetiriz o yüzden reducer'a ihtiyaç duyuyoruz.

//dispatch içerisinde payload gönderdiğin nesne yerine geçer.

/**
action: Reducer'a gönderilen eylem nesnesi.

action.payload: Eylemin taşıdığı harcama nesnesi.

action.payload.amount: Bu harcama nesnesinin amount özelliği.
 */

/*
Backend → Harcama verilerini getirir
         ↓
React → Verileri state içinde tutar
         ↓
Reducer → Ekleme, silme, güncelleme işlemlerini yönetir
         ↓
Context → Verileri bileşenlere dağıtır
*/