import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NameContext } from "../../contexts/NameContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import TransactionItem from "./TransactionItem";
import { useNavigate } from "react-router-dom";
import ButtonsContainer from "./ButtonsContainer";
import Modal from "../../components/Modal";
import { BoxArrowRight } from "styled-icons/bootstrap";
import DaysButtons from "./DaysButtons";

export default function TransactionsPage() {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { config } = useContext(AuthContext);
  const { name } = useContext(NameContext);
  const [idToDelete, setIdToDelete] = useState("");
  const [transactionsList, setTransactionsList] = useState(null);
  const [balance, setBalance] = useState(0);
  const [transactionsDays, setTransactionsDays] = useState(null);
  const auth = {
    headers: { Authorization: `Bearer ${config}` },
  };
  useEffect(() => {
    axios
      .get(`${BASE_URL}/transactions`, auth)
      .then((res) => {
        transactionsFilter(res.data);
        /* setTransactionsList(res.data) */
        balanceCalculate(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, [openModal, transactionsDays]);
  function confirmDeleteModal(id) {
    setOpenModal(true);
    setIdToDelete(id);
  }
  function deleteTransaction(id) {
    axios
      .delete(`${BASE_URL}/transactions/${id}`, auth)
      .then(setOpenModal(false))
      .catch((err) => {
        setOpenModal(false);
        console.log(err);
      });
  }
  function balanceCalculate(transactions) {
    let totalbalance = 0;
    transactions.map((t) =>
      t.type === "deposit"
        ? (totalbalance += parseFloat(t.transactionValue))
        : (totalbalance -= parseFloat(t.transactionValue))
    );
    setBalance(totalbalance);
  }
  function signOut() {
    localStorage.clear();
    navigate("/");
  }
  function transactionsFilter(list) {
   
    if (!transactionsDays) {
      setTransactionsList(list);
      return;
    }
    const now = Date.now();
    const oneDay = 86400000;
    const daysFilter = transactionsDays * oneDay;
    const milisseconds = now - daysFilter;

    const transactionsFiltered = list.filter((l) => l.time > milisseconds);
    setTransactionsList(transactionsFiltered);
  }
  return (
    <PageContainer>
      {openModal ? (
        <Modal>
          <p> Você deseja apagar essa transação ?</p>
          <div onClick={() => deleteTransaction(idToDelete)}>Confirmar</div>
          <div onClick={() => setOpenModal(false)}>Cancelar</div>
        </Modal>
      ) : (
        <></>
      )}
      <TopContainer>
        <h1> Olá, {name}</h1>
        <SignOutIcon onClick={signOut} />
      </TopContainer>
      {transactionsList === null ? (
        <Loading/>
      ) : (
        <>
          {transactionsList.length === 0 ? (
            <NoTransactions>
              <p>Não há registros de entrada ou saída</p>
            </NoTransactions>
          ) : (
            <>
              <DaysButtons setTransactionsDays={setTransactionsDays}/>
               
              <TransactionsContainer>
                {transactionsList.map((t) => (
                  <TransactionItem
                    key={t._id}
                    transaction={t}
                    confirmDeleteModal={confirmDeleteModal}
                  />
                ))}
              </TransactionsContainer>
              <Balance balance={balance}>
                <h3>SALDO</h3>
                <p>{balance.toFixed(2).replace(".", ",")}</p>
              </Balance>
            </>
          )}
        </>
      )}
      <ButtonsContainer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 25px;
  background-color: ${COLORS.background};
  align-items: center;
  justify-content:space-between;
`;
const TransactionsContainer = styled.div`
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const NoTransactions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;

  p {
    width: 180px;
    height: 46px;
    font-family: ${FONTS.text};
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #868686;
    text-align: center;
  }
`;

const Balance = styled.div`
  padding: 15px;
  font-family: ${FONTS.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 326px;
  background-color: #ffffff;
  height: 25px;
  border-radius: 0 0 5px 5px;
  h3 {
    font-weight: 700;
    font-size: 17px;
  }
  p {
    font-weight: 400;
    font-size: 17px;
    color: ${(props) => (props.balance >= 0 ? "#03AC00" : "#C70000")};
  }
`;
const SignOutIcon = styled(BoxArrowRight)`
  color: #ffffff;
  width: 30px;
`;
const TopContainer = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  h1 {
    margin-bottom: 22px;
    font-family: ${FONTS.text};
    color: ${COLORS.text};
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
  }
`;

const Loading = styled.div`

    width: 90px;
    height: 90px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`