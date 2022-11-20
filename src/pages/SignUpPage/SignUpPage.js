import styled from "styled-components";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
export default function SignUpPage(){
return (
    <PageContainer>
        <Logo>MyWallet</Logo>
        <SignUpForm/>
        <StyledLink to ="/"><SignUpMessage> Já tem uma conta? Entre agora!</SignUpMessage> </StyledLink> 
    </PageContainer>
)
}
const Logo = styled.h1`
font-family:${FONTS.logo};
   margin-bottom:24px;
   color:${COLORS.text};
   font-weight: 400;
    font-size: 32px;
    line-height: 50px;
`
const PageContainer = styled.div `
    display:flex;
    flex-direction:column;
    width:100vw;
    height:100vh;
    align-items:center;
    justify-content:center;
    background-color:${COLORS.background};
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const SignUpMessage= styled.p `
margin-top:25px;
font-family: ${FONTS.text};
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
text-align: center;
color: ${COLORS.text};
`