import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
export default function DaysButtons({setTransactionsDays}){

    return(
        <ButtonsContainer>
        <button onClick={() => setTransactionsDays(null)}>
        Todas
      </button>
      <button onClick={() => setTransactionsDays(3)}>3 dias</button>
      <button onClick={() => setTransactionsDays(7)}>7 dias</button> 
      <button onClick={() => setTransactionsDays(15)}>15 dias</button>
      <button onClick={() => setTransactionsDays(30)}>30 dias</button>
      </ButtonsContainer>
    )
}

const ButtonsContainer = styled.div `

display:flex;
justify-content:space-between;
margin-bottom:10px;
width:326px;
button{
  background-color: #b77fd1;
  font-family:${FONTS.text};
  font-weight: 700;
  color: ${COLORS.text};
  height: 40px;
  font-size: 15px;
  border-radius:5px;
  border:none;
  &:active {
    background-color:#bfb4c4;
  }
}

`