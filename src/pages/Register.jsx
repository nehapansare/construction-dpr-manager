import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [repassword,setRepassword] = useState("");
const [error,setError] = useState("");

function handleRegister(e){

e.preventDefault();

if(password !== repassword){
setError("Passwords do not match");
return;
}

let users = JSON.parse(localStorage.getItem("users")) || [];

const userExists = users.find((u)=>u.email === email);

if(userExists){
setError("User already exists");
return;
}

users.push({email,password});

localStorage.setItem("users",JSON.stringify(users));

alert("Registration Successful");

navigate("/");
}

return(

<div className="container">

<h2>Register</h2>

<form onSubmit={handleRegister}>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<input
type="password"
placeholder="Re-enter Password"
value={repassword}
onChange={(e)=>setRepassword(e.target.value)}
required
/>

<button type="submit">
Register
</button>

<p style={{color:"red"}}>{error}</p>

<p className="link" onClick={()=>navigate("/")}>
Already have account? Login
</p>

</form>

</div>

);

}

export default Register;
