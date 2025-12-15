import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About } from "./pages/section/About";
import { Hero } from "./pages/section/Hero";
import { NavBar } from "./pages/section/NavBar";
import { Skills } from "./pages/section/Skills";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-linear-to-b from-[#234C6A] to-[#222222] overflow-auto ">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
