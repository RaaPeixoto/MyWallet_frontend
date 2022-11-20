import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingGif from "../../assets/images/loadingGif.gif";
import { BASE_URL } from "../../constants/url";
import FormItem from "../../components/Form";

export default function SignUpForm (){
    let navigate = useNavigate();
    const [loading,setLoading] = useState (false)
    const [form, setForm] = useState({
    name:"",
      email: "",
      password: "",
      passwordConfirmation:""
    });
  
    function handleForm(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
    function login(e) {
      e.preventDefault();
      axios.post(`${BASE_URL}/signup`,form)
      .then(res=>{
          navigate("/")
      })
      .catch(err => {
          alert(err.response.data)
          setLoading(false)
      })
     setLoading(true)
    }
    return (
        <FormItem>
        <form onSubmit={login}>
        <input 
            type = "text"
             name ="name" 
             value ={form.name}
             onChange={handleForm}
             placeholder="Nome"
             required
             disabled = {loading}
            />
            <input 
            type = "email"
             name ="email" 
             value ={form.email}
             onChange={handleForm}
             placeholder="E-mail"
             required
             disabled = {loading}
            />
             <input 
            name ="password"
            value ={form.password}
            onChange={handleForm}
            type="password"
            required
            placeholder="Senha"
            disabled = {loading}
            />
            <input 
            name ="passwordConfirmation"
            value ={form.passwordConfirmation}
            onChange={handleForm}
            type="password"
            required
            placeholder="Confirme a senha"
            disabled = {loading}
            />
            <button type="submit" disabled = {loading}> {loading? <img src={loadingGif} alt ="icone carregando"/>:"Cadastrar"}</button>
        </form>
    </FormItem>
    )
}