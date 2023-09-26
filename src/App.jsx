import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { CustomMeditations } from "./pages/CustomMeditations";
import { GuidedMeditations } from "./pages/GuidedMeditation";
import { FirstSteps } from "./pages/FirstSteps";

import { PathProvider } from "./context/pathContext";
import { DataProvider } from "./context/dataContext";
import { TimerProvider } from "./context/timerContext";

export default function App() {
  return (
    <PathProvider>
      <DataProvider>
        <Router>
          <main className="flex flex-col font-Mooli h-full text-slate-800 bg-gradient-to-b from-amber-500  via-yellow-400 to-blue-300 ">
            <NavBar />
            <TimerProvider>
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
            </TimerProvider>
            <Footer />
          </main>
        </Router>
      </DataProvider>
    </PathProvider>
  );
}
