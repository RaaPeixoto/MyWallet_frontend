import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NameContext } from "../../contexts/NameContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
export default function TransactionsPage() {
  const { config } = useContext(AuthContext);
  const { name } = useContext(NameContext);
  const [transactionsList,setTransactionsList] = useState (null);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/transactions`, {
        headers: { Authorization: `Bearer ${config}` },
      })
      .then((res) => setTransactionsList(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);
console.log(transactionsList)
  return (
    <PageContainer>
        
      <div>
        <h1> Olá, {name}</h1>
      </div>
      { transactionsList === null ?
      <>loading</> :
      <TransactionsContainer>
      {transactionsList.length === 0? 
            <NoTransactions><p>Não há registros de entrada ou saída </p></NoTransactions> 
            : 
            <>
           {/*  {habitsList.map ((h)=> <HabitItem key={h.id} setHabitsList={setHabitsList} habitId ={h.id} habitName={h.name} habitDays={h.days}/>)} */}
           aaaaaaaaaa
            </>
            }
      </TransactionsContainer>
    }
     
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
  h1 {
    margin-bottom: 22px;
    font-family: ${FONTS.text};
    color: ${COLORS.text};
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
  }
`;
const TransactionsContainer = styled.div`
  width: 326px;
  height: 446px;
  background: #FFFFFF;
border-radius: 5px;
`;

const NoTransactions = styled.div `
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
p{
width: 180px;
height: 46px;
font-family: ${FONTS.text};
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #868686;
text-align:center;
}
`
