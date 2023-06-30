import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import MyNav from "./components/redux/MyNav";

function App() {
  return (
    <div className="App sfondo">
      <BrowserRouter>
        <MyNav />
        <Routes>
          {/* <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<MyProfilePage />} />
        <Route path="/profile/:userId" element={<MyProfilePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile/:userId/experiences" element={<JobExperiences prop="643d132022a6ab00141a8567" />} /> */}
        </Routes>
        {/* <LinkedinFooter /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
