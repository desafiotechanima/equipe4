import React  from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Menu, Responsavel, Filho } from "./pages";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login/>
        }
      />
      <Route
        path="/menu"
        element={
          <Menu/>
        }
      />
      <Route
        path="/responsavel"
        element={
          <Responsavel/>
        }
      />
      <Route
        path="/filho"
        element={
          <Filho/>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
