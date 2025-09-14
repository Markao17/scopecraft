import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wizard from "./pages/Wizard";
import ScopeBuilder from "./pages/ScopeBuilder";
import Preview from "./pages/Preview";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wizard" element={<Wizard />} />
            <Route path="/scope-builder" element={<ScopeBuilder />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
