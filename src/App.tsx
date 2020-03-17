import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="main">
        <Main />
      </section>
    </div>
  );
}

export default App;
