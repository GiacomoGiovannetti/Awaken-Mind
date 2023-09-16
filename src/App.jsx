import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CustomMeditations } from "./pages/CustomMeditations";
import { GuidedMeditations } from "./pages/GuidedMeditation";
import { FirstSteps } from "./pages/FirstSteps";
import { PathProvider } from "./context";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <PathProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/custom-meditations"
            element={<CustomMeditations />}
          ></Route>
          <Route
            path="/guided-meditations"
            element={<GuidedMeditations />}
          ></Route>
          <Route path="/first-steps" element={<FirstSteps />}></Route>
        </Routes>
      </Router>
    </PathProvider>
  );
}
