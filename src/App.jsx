import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UtilityNavbar from "./components/TextNavbar/NavbarComponent.jsx";
import UtilityTextData from "./components/TextData/TextDataComponent.jsx";
import UtilityAbout from "./components/About/AboutComponent.jsx";

function App() {
  return (
    <>
      <Router basename={import.meta.env.DEV ? '/' : '/textTract/'}>
        <UtilityNavbar brandText="TextTract" />
        <br />
        <Routes>
          <Route exact path="/" element={<UtilityTextData />} />
          <Route
            exact
            path="/about"
            element={<UtilityAbout aboutText="About us" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
