
import Homes from "./pages/Home";
import Appointments from "./pages/Appointment";
import Appointment from "./pages/Appointment/Appointment";
import{BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Layout from "./components/Layout"
import FillForm from "./pages/Appointment/FillForm";


const Router=()=>{

    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}> 
                     <Route element={<Homes />} index />                     
                     <Route path="appointment" element={<Outlet />}>
                        <Route element={<Appointments />} index />
                        <Route element={<Appointment />} path=":appId"/>
                    </Route>
                    
                    <Route path=":fillForm" element={<FillForm />} />    
                    </Route>             
                </Routes>
        
        </BrowserRouter>
    )
    

}

export default Router;