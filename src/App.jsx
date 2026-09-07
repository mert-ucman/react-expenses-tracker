import ExpenseContextProvider from "./assets/Context/ExpenseContext";
import MainWindow from "./assets/Components/MainWindow";


function App() {
    return (
        <>
            <ExpenseContextProvider>
                <MainWindow />
            </ExpenseContextProvider>
        </>
    )
}

export default App;