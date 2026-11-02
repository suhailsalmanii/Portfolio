import React from "react";
import Header from "./components/header/Header";
import Home from "./components/mainContent/Home";
import About from "./components/mainContent/About";
import Skills from "./components/mainContent/Skills";
import Project from "./components/mainContent/Project";
import Contact from "./components/mainContent/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
