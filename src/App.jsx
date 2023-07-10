import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import MyFooter from "./components/MyFooter";
import Itinerary from "./components/Itinerary";
import Preferiti from "./components/Preferiti";
import Admin from "./components/Admin";
import AllDestinations from "./components/AllDestinations";

function App() {
  return (
    <div className="App sfondo">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinations/:id" element={<Itinerary />} />
          <Route path="/all-destinations" component={<AllDestinations />} />

          <Route path="/:id/preferiti" element={<Preferiti />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
