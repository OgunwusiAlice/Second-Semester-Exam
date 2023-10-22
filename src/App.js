import React from "react";
import { Routes, Route, redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Counter from "./components/counter";
import Home from "./components/home";
import "./App.css";
import notFound from "./components/notFound";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/Counter" Component={Counter} />
            <Route path="/notFound" Component={notFound} />
            <Route path="/" Component={Home} />
            <Route path="*" Component={notFound} />
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
