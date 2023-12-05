import { Homepage } from "./Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./Registerpage";
import { Login } from "./Loginpage";
import { ListallproductDetails } from "./ListProductDetails";
import { Reading } from "./Readingpage";
import { Updating } from "./Updatepage";

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
          <Route path="reading/:myid" exact element={<Reading/>} />
          <Route path="updating/:count" exact element={<Updating/>} />
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
