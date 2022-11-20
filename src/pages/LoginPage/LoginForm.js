import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext"
import { NameContext } from "../../contexts/NameContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingGif from "../../assets/images/loadingGif.gif";
import { BASE_URL } from "../../constants/url";
import FormItem from "../../components/Form";
import { useContext } from "react";
export default function LoginForm() {
  let navigate = useNavigate();
  const {setConfig} = useContext(AuthContext);
    const {setName} = useContext(NameContext);
  const [loading,setLoading] = useState (false)
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function login(e) {
    e.preventDefault();
    axios.post(`${BASE_URL}/signin`,form)
    .then(res=>{
      setConfig (res.data.token)
            setName(res.data.userName) 
            localStorage.setItem("token",res.data.token)
          
            localStorage.setItem("name",res.data.userName)
        navigate("/transactions")
    })
    .catch(err => {
        alert(err.response.data)
        setLoading(false)
    })
   setLoading(true)
  }
  return(
    <FormItem>
        <form onSubmit={login}>
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
            <button type="submit" disabled = {loading}> {loading? <img src={loadingGif} alt ="icone carregando"/>:"Entrar"}</button>
        </form>
    </FormItem>
  )
}
