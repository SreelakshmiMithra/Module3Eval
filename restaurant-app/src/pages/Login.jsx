import {useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../auth/AuthContext";

 const Login = () => {
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
    const{login} = useContext(AuthContext);
    const navigate = useNavigate(); 
    const handleLogin = ()=>{
        const user = login(email,password);
        if(!user){
            alert("Invalid credentials");
            return;
        }
        user.role ==="admin" ? navigate("/admin/dashboard") : navigate ("/customer/dashboard");
    };
    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e=> setEmail (e.target.value)}/>
            <input type ="password" placeholder="Password" onChange={e=> setPassword (e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
    }
    export default Login;