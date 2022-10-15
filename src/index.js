import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import GlobalLayout from "./components/layout/GlobalLayout/GlobalLayout";
import AdmGlobalLayout from "./components/layout/AdmGlobalLayout/AdmGlobalLayout";
import Agendamentos from "./pages/Agendamentos/Agendamentos";
import Vagas from "./pages/Vagas/Vagas";
import Administracao from "./pages/Administracao/Administracao";
import SitePersonalizavel from "./pages/SitePersonalizavel/SitePersonalizavel";
import InformacoesDaConta from "./pages/InformacoesDaConta/InformacoesDaConta";
import FormaDePagamento from "./pages/FormaDePagamento/FormaDePagamento";
import RecupPassword from "./pages/RecupPassword/RecupPassword";
import RecupPasswordTwo from "./pages/RecupPasswordTwo/RecupPasswordTwo";
import DeveloperApply from "./pages/DeveloperApply/DeveloperApply";
import AnunciosVagas from "./pages/AnunciosVagas/AnunciosVagas";
import EditarVagaAdm from "./pages/EditarVagaAdm/EditarVagaAdm";
import DesenvolvedoresAdm from "./pages/DesenvolvedoresAdm/DesenvolvedoresAdm";
import EditarDevAdm from "./pages/EditarDevAdm/EditarDevAdm";
import NovoAgendamento from "./pages/Agendamentos/NovoAgendamento/NovoAgendamento";
import EmpresasAdm from "./pages/EmpresasAdm/EmpresasAdm";
import EditarEmpresaAdm from "./pages/EditarEmpresaAdm/EditarEmpresaAdm";
import VisualizarAgendamento from "./pages/Agendamentos/VisualizarAgendamento/VisualizarAgendamento";
import Login from "./pages/Login/Login";

render(
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
        <Route
          path="/rh/agendamentos/novoagendamento"
          element={
            <GlobalLayout>
              <NovoAgendamento />
            </GlobalLayout>
          }
        />
        <Route
          path="/rh/agendamentos/visualizaragendamento/:id"
          element={
            <GlobalLayout>
              <VisualizarAgendamento />
            </GlobalLayout>
          }
        />
        <Route
          path="/rh/vagas"
          element={
            <GlobalLayout>
              <Vagas />
            </GlobalLayout>
          }
        />
        <Route
          path="/rh/sitepersonalizavel"
          element={
            <GlobalLayout>
              <SitePersonalizavel />
            </GlobalLayout>
          }
        />
        <Route
          path="/rh/administracao"
          element={
            <GlobalLayout>
              <Administracao />
            </GlobalLayout>
          }
        />
        <Route
          path="/rh/perfil"
          element={
            <GlobalLayout>
              <InformacoesDaConta />
            </GlobalLayout>
          }
        />
        <Route
          path="/rh/pagamento"
          element={
            <GlobalLayout>
              <FormaDePagamento />
            </GlobalLayout>
          }
        />
        <Route
          path="/user/login"
          element={
            <Login />
          }
        />
        <Route
          path="/user/recupPassword"
          element={
            <RecupPassword />
          }
        />
        <Route
          path="/user/recupPasswordTwo"
          element={
            <RecupPasswordTwo />
          }
        />
        <Route
          path="/user/DeveloperApply"
          element={
            <DeveloperApply />
          }
        />
        <Route
          path="/adm/anunciosvagas"
          element={
            <AdmGlobalLayout>
              <AnunciosVagas />
            </AdmGlobalLayout>
          }
        />
        <Route
          path="/adm/desenvolvedores"
          element={
            <AdmGlobalLayout>
              <DesenvolvedoresAdm />
            </AdmGlobalLayout>
          }
        />
        <Route
          path="/adm/empresas"
          element={
            <AdmGlobalLayout>
              <EmpresasAdm />
            </AdmGlobalLayout>
          }
        />
        <Route
          path="/adm/anunciosvagas/editarvaga/:nome_da_vaga"
          element={
            <AdmGlobalLayout>
              <EditarVagaAdm />
            </AdmGlobalLayout>
          }
        />
        <Route
          path="/adm/desenvolvedores/editardev/:nome_dev"
          element={
            <AdmGlobalLayout>
              <EditarDevAdm />
            </AdmGlobalLayout>
          }
        />
        <Route
          path="/adm/empresas/editarempresa/:nome_empresa"
          element={
            <AdmGlobalLayout>
              <EditarEmpresaAdm />
            </AdmGlobalLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
