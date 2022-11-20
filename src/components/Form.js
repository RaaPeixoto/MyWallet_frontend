import styled from "styled-components";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
export default function FormItem(props) {
  return (
  <FormContainer>{props.children}</FormContainer>
  )
}

const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    font-family: ${FONTS.text};
    padding-left: 15px;
    margin-bottom: 13px;
    width: 326px;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: none;
    border: none;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    &::placeholder {
      font-family: ${FONTS.text};
      font-size: 19.976px;
      line-height: 25px;
      color: #dbdbdb;
    }
    &:disabled {
      background: #f2f2f2;
    }
  }
  button {
    font-family: ${FONTS.text};
    font-weight: 400;
    width: 326px;
    height: 45px;
    background: ${COLORS.button};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    box-shadow: none;
    border: none;
    &:disabled {
   
      background: #eadaf2;
      opacity: 0.7;
    }
    img {
      width: 70px;
    }
  }
`
