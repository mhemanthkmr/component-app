import "./App.css";
import Navbar from "./components/navbarComponent";
import React from "react";
import Counters from "./components/coutersComponent";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
