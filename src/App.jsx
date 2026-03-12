import {BrowserRouter,Routes,Route} from "react-router-dom"

import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import ProjectList from "./pages/ProjectList/ProjectList"
import DPRForm from "./pages/DPRFrom/DPRForm"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/projects" element={<ProjectList/>}/>
<Route path="/dpr/:id" element={<DPRForm />} />

<Route path="/forgot" element={<ForgotPassword/>}/>

</Routes>

</BrowserRouter>

)

}

export default App
