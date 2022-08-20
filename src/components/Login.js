import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authservice";


const Login =()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleLogin= async(e)=>{
        e.preventDefault();

        try{
            await authService.login(mail,password).then(()=>{
                navigate("/home");
                window.location.reload();
            })
            .then(error=>{console.log(error);});
        }catch(error){
            console.log(error);
        }
    };
    return(
        <div>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input type ="text" value={email}
                onChange={e=>{setEmail(e.target.value)}}
                 placeholder="email"
                />
                <input type ="password" value={password}
                onChange={e=>{setPassword(e.target.value)}}
                 placeholder="password"
                />
                <button type="submit">login In</button>
            </form>
        </div>

    );

}


export default Login;