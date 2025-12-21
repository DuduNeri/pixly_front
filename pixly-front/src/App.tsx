import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Home } from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";

export default function App() {
  return (
    <Routes>
      {/* 🔴 rota inicial */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* 🔵 Auth pages */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 🟢 Página após login */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
