import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Invoices from "./pages/Invoices"
import Navbar from "./components/Navbar"


function App() {

    return (
        <div className=" font-poppins">
            <Routes>

                <Route path="/Home" element={<Home></Home>}></Route>
                <Route path="/invoices" element={<Invoices></Invoices>}></Route>



                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
            </Routes>

        </div>

    )

}

export default App
