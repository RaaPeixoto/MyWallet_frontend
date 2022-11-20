import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/style/GlobalStyle"
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
            </Routes>
        </BrowserRouter>
    )

}

export default App;