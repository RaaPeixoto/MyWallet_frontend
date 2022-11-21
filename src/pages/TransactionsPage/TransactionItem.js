import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function TransactionItem({ transaction, confirmDeleteModal }) {

    const { _id, description, type, date, transactionValue } = transaction;

    return (
        <TransactionContainer>
            <StyledLink to={`/edittransaction/${type}/${_id}`}>
                <div>
                    <TransactionDate>{date.slice(0, 5)} </TransactionDate>
                    <TransactionDescription>{description}</TransactionDescription>
                </div>
            </StyledLink>
            <div>
                <TransactionValue TransactionType={type}>{parseFloat(transactionValue).toFixed(2).replace(".", ",")}</TransactionValue>
                <DeleteTransaction onClick={() => confirmDeleteModal(_id)}>x</DeleteTransaction>
            </div>
        </TransactionContainer>
    )
}

const TransactionContainer = styled.div`
width:100%;
padding:23px 10px 12px 10px;
display:flex;
justify-content:space-between;
align-items:center;
font-family:${FONTS.text};
font-weight: 400;
font-size: 16px;
div{
    display:flex;
align-items:center;
}
`
const TransactionDate = styled.p`
color: #C6C6C6;
margin-right:10px;
`
const TransactionDescription = styled.p`
color: #000000;
width:145px;
overflow-wrap: break-word;
line-height: 19px;
`
const TransactionValue = styled.p`
margin-right:7px;
color: ${props => props.TransactionType === "deposit" ? "#03AC00" : "#C70000"};
`

const DeleteTransaction = styled.p`

        color: #C6C6C6;
    
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;