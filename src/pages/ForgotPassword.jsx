import {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./ForgotPassword.css"

function ForgotPassword(){

const [email,setEmail] = useState("")
const [newPassword,setNewPassword] = useState("")
const [message,setMessage] = useState("")

const navigate = useNavigate()

function handleReset(e){

e.preventDefault()

if(email === "test@test.com"){

setMessage("Password changed successfully")

setTimeout(()=>{
navigate("/")
},2000)

}else{

setMessage("Email not found")

}

}

return(

<div className="forgot-container">

<div className="forgot-box">

<h2>Reset Password</h2>

<form onSubmit={handleReset}>

<input
type="email"
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="New Password"
onChange={(e)=>setNewPassword(e.target.value)}
required
/>

<button type="submit">
Reset Password
</button>

<p className="message">{message}</p>

</form>

</div>

</div>

)

}

export default ForgotPassword
