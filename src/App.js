import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Counter from "./components/counter";
import Home from "./components/home";
import notFound from "./components/notFound";
import TestErrorBoundary from "./components/testErrorBoundary";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/Counter" Component={Counter} />
            <Route path="/notFound" Component={notFound} />
            <Route path="/test_error_boundary" Component={TestErrorBoundary} />
            <Route path="/" Component={Home} />
            <Route path="*" Component={notFound} />
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
