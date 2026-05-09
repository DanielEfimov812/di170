import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Routes, Route, Link } from "react-router";
import Nav from "./pages/Nav";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Nav/>
      <section id='center'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<><Home/></>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path='*' element={<h2>404 page not found</h2>}/>
        </Routes>
      </section>
    </>
  );
}

export default App;
