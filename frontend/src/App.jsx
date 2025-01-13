import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes> */}
      <Home />
    </>
  );
}

export default App;
