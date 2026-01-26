import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import  AuthProvider  from "./context/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import Header from "./components/Header";
import React from "react";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Header />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
