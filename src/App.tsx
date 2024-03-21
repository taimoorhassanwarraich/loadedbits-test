import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/header/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
