import styled from "styled-components"
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useState } from "react";
import FormItem from "../../components/Form";
import loadingGif from "../../assets/images/loadingGif.gif";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { ArrowIosBack } from "styled-icons/evaicons-solid";
import { Link } from "react-router-dom";
export default function EditTransactionPage(){
    const { type,id } = useParams();
    const title = type === "deposit"? "entrada" :"saída";
    let navigate = useNavigate();
    const [loading,setLoading] = useState (false)
    const [form, setForm] = useState({
    description:"",
      transactionValue:"",
      type:type
    });
    const { config } = useContext(AuthContext);
    const auth = {
        headers: { Authorization: `Bearer ${config}` },
      }
    function handleForm(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    
    }
    function editTransaction(e) {
        console.log(form)
      e.preventDefault();
      axios.put(`${BASE_URL}/transactions/${id}`,form,auth)
      .then(res=>{
          navigate("/transactions")
      })
      .catch(err => {
          alert(err.response.data)
          setLoading(false)
      })
     setLoading(true)
    }
   
    return(
        <PageContainer>
           <div> <h1> Editar {title} </h1> <StyledLink to ={-1}><BackIcon/> </StyledLink></div>
            <FormItem>
        <form onSubmit={editTransaction}>
        <input 
            type = "number"
             name ="transactionValue" 
             value ={form.transactionValue}
             onChange={handleForm}
             placeholder="Valor"
             required
             disabled = {loading}
            />
            <input 
            type = "text"
             name ="description" 
             value ={form.description}
             onChange={handleForm}
             placeholder="Descrição"
             required
             disabled = {loading}
            />
         
            <button type="submit" disabled = {loading}> {loading? <img src={loadingGif} alt ="icone carregando"/>:`Atualizar ${title}`}</button>
        </form>
        </FormItem>
        </PageContainer>
    )
}



const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100vw;
  height: 100vh;
  padding: 25px;
  background-color: ${COLORS.background};
  div {
    width: 326px;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
  }
  h1 {
    width: 326px;
    text-align:start;
    margin-bottom: 22px;
    font-family: ${FONTS.text};
    color: ${COLORS.text};
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
  }
 
`;

const BackIcon = styled(ArrowIosBack)`
color:#FFFFFF;
width: 35px;

`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;