import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //check this in hashrouter
import HomePage from "./components/Home";
import DetailPage from "./components/Card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
