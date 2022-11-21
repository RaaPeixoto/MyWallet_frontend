import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/style/GlobalStyle"
import AddTransactionPage from "./pages/AddEditTransactionsPages/AddTransactionPage";
import EditTransactionPage from "./pages/AddEditTransactionsPages/EditTransactionPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TransactionsPage from "./pages/TransactionsPage/TransactionPage";
function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element = {<SignUpPage/>}/>
                <Route path="/transactions" element = {<TransactionsPage/>}/>
                <Route path="/addtransaction/:type" element = {<AddTransactionPage/>}/>
                <Route path="/edittransaction/:type/:id" element = {<EditTransactionPage/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;