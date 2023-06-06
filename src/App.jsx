import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import { Animatedcursor } from './Components/AnimatedCursor'
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { AnimatePresence } from "framer-motion";
import { Loading } from "./pages/Loading/Loading";
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Skills = React.lazy(() => import("./pages/Skills/Skills"));
const Portfolio = React.lazy(() => import("./pages/Portfolio/Portfolio"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <Home/>
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/resume"
            element={
              <React.Suspense fallback={<Loading />}>
                <Skills />
              </React.Suspense>
            }
          />
          <Route
            path="/portfolio"
            element={
              <React.Suspense fallback={<Loading />}>
                <Portfolio />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense fallback={<Loading />}>
                <Contact />
              </React.Suspense>
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
      {/* <Animatedcursor/>   */}
    </div>
  );
}

export default App;
