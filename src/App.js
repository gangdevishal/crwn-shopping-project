import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import React from "react";

const Hats = () => {
  return <div>Hello HATS</div>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/hats" element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
