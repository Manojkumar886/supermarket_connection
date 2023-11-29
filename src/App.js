import { Homepage } from "./Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./Registerpage";
import { Login } from "./Loginpage";

function App() {
  return (
    <>
     <BrowserRouter>
    <Homepage/>
    <Login/>
    <Routes>
      <Route path="createproduct" exact element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
