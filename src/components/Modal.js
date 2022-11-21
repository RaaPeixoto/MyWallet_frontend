import styled from "styled-components"
import {COLORS} from "../constants/colors"
import {FONTS} from "../constants/fonts"
export default function Modal (props) {
  
    return (
        <PageContainer>
            <ModalContainer>
        {props.children}
        </ModalContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
top:0;
right:0;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
background-color: rgb(80, 66, 86,0.7);
z-index:2;
`

const ModalContainer= styled.div`
    width:300px;
    height:300px;
    background-color:#FFFFFF;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;    
    padding:15px;
    z-index:2;
    p{
        margin-top:50px;
        width:300px;
        text-align:center;
        font-family: ${FONTS.text};
        font-weight: 700;
        font-size: 20px;
    }
    div{
        
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#ab92b7;
        width:110px;
        height:46px;
        border-radius: 5px;
        color: ${COLORS.text};
        font-family: ${FONTS.text};
        font-weight: 700;
        font-size: 18px;
        }
    div:nth-child(3){
            background-color:${COLORS.button}!important;}
   

`
