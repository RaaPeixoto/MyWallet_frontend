import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NameContext } from "../../contexts/NameContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import TransactionItem from "./TransactionItem";
import { AddCircle } from "styled-icons/ionicons-outline";
import { DashCircle } from "styled-icons/bootstrap";
import { Link } from "react-router-dom";

export default function ButtonsContainer () {
    return (
   <Container>
        <StyledLink to ="/addTransaction/deposit">
        <AddButton>
          <AddIcon />
          <p>Nova Entrada</p>
        </AddButton>
      </StyledLink>
      <StyledLink to ="/addTransaction/withdraw">
        <AddButton >
          <DashIcon />
          <p>Nova Saída</p>
        </AddButton>
        </StyledLink>
</Container>

    )
}

const AddIcon = styled(AddCircle)`
color:#FFFFFF;
width: 27px;

`
const DashIcon = styled(DashCircle)`
color:#FFFFFF;
width: 22px;

`
const Container = styled.div`
display:flex;
width:326px;
justify-content:space-between;
margin-top:13px;
`

const AddButton = styled.div`
background-color:${COLORS.button};
display:flex;
flex-direction:column;
justify-content:space-between;
padding:10px;
border-radius: 5px;
width: 155px;
height: 114px;
 p {

width: 64px;

font-family: ${FONTS.text};
font-weight: 700;
font-size: 17px;
line-height: 20px;
color: ${COLORS.text};

 }
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
