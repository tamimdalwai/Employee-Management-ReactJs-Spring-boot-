import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route
            path="/"
            element={<ListEmployeeComponent></ListEmployeeComponent>}
          ></Route>
          <Route path="/employees" Component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" element={<EmployeeComponent></EmployeeComponent>}></Route>
          <Route path="/edit-employee/:id" element={<EmployeeComponent></EmployeeComponent>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>

      {/* <ListEmployeeComponent></ListEmployeeComponent> */}
    </>
  );
}

export default App;
