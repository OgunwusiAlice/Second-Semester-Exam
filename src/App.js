import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Counter from "./components/counter";
import Home from "./components/home";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/Counter" Component={Counter} />
            <Route path="/" Component={Home} />
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
