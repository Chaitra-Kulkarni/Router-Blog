import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <h1>hello, Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
