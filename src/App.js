import { Homepage } from "./Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./Registerpage";
import { Login } from "./Loginpage";
import { ListallproductDetails } from "./ListProductDetails";

function App() {
  return (
    <>
      {
        (sessionStorage.getItem("auth"))?
        <>
          <BrowserRouter>
          <Homepage/>
          <Routes>
          <Route path="createproduct" exact element={<Register/>}/>
          <Route path="listallproductdetails" exact element={<ListallproductDetails/>}/>
          </Routes>
          </BrowserRouter>
        </>
        :
        <>
          <Login/>
        </>
      }
    </>
  );
}

export default App;
