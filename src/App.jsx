import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PlatformHighlights from "./components/PlatformHighlights";
import CollegeSchoolAccess from "./components/CollegeSchoolAccess";
import RailwaySection from "./components/RailwaySection";
import DatabaseSection from "./components/DatabaseSection";
// import NotFound from "./components/NotFound"; // Optional
// import ScrollToTop from "./components/ScrollToTop"; // Optional
import "./styles/Nexaura.css";

function App() {
  return (
    
      <div className="flex flex-col min-h-screen bg-gray-50 text-slate-800">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <PlatformHighlights />
                </>
              }
            />
            <Route path="/college-school" element={<CollegeSchoolAccess />} />
            <Route path="/railways" element={<RailwaySection />} />
            <Route path="/database" element={<DatabaseSection />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    
  );
}

export default App;
