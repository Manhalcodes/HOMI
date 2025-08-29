import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import About from "./pages/About.jsx";
import JournalEditor from "./pages/JournalEditor.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar";
import "./styles.css";

// Wrapper component to handle navbar visibility
function AppContent() {
  const location = useLocation();
  const noNavbarRoutes = ['/dashboard', '/journal', '/write', '/journal/new'];
  
  // Check if current route should hide navbar
  const shouldShowNavbar = !noNavbarRoutes.some(route => 
    location.pathname.startsWith(route)
  ) && !location.pathname.match(/^\/journal\/\d+$/);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {shouldShowNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Dashboard />} />
          <Route path="/write" element={<JournalEditor />} />
          <Route path="/journal/new" element={<JournalEditor />} />
          <Route path="/journal/:id" element={<JournalEditor />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}