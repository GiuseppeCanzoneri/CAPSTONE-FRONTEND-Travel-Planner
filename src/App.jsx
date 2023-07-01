import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App sfondo">
      <BrowserRouter>
        <MyNav />
        <Routes>
          {/* * <Route path="/home" element={<HomePage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <LinkedinFooter /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
