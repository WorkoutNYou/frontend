import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
// import UserProfile from "./components/UserProfile";
import { Navigate } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import WorkoutEditor from "./components/WorkoutEditor";

function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("authToken"); // or your auth logic
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* <ProtectedRoute> */}
        <Route path="/workout-editor" element={<WorkoutEditor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* </ProtectedRoute> */}
        {/* <Route path="/user/:id" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} /> */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
