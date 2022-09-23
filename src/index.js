import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import GlobalLayout from "./components/layout/GlobalLayout/GlobalLayout";
import Agendamentos from "./pages/Agendamentos/Agendamentos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/rh/dashboard"
          element={
            <GlobalLayout>
              <Dashboard />
            </GlobalLayout>
          }
        />
        <Route
          path="/rh/agendamentos"
          element={
            <GlobalLayout>
              <Agendamentos />
            </GlobalLayout>
          }
        />
        <Route path="/rh/vagas" element={<GlobalLayout></GlobalLayout>} />
        <Route
          path="/rh/sitepersonalizavel"
          element={<GlobalLayout></GlobalLayout>}
        />
        <Route
          path="/rh/administracao"
          element={<GlobalLayout></GlobalLayout>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
