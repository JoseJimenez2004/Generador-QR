import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaSignInAlt, FaUserPlus, FaCheckCircle, FaPlus } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IniciarSesion from './IniciarSesion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="menu-container">
              <div className="logo">QRify<span className="highlight">Media</span></div>
              <div className="button-container">
                <Link to="/iniciar-sesion">
                  <button className="login-button">
                    <FaSignInAlt className="icon" /> Iniciar sesión
                  </button>
                </Link>
                <button className="register-button">
                  <FaUserPlus className="icon" /> Registrarse
                </button>
              </div>

              <div className="menu2">
                <div className="qr-info">
                  <h2>Creamos <span className="highlight">Códigos QR</span> Fácilmente</h2>
                </div>

                <div className="features">
                  <div className="feature-item">
                    <FaCheckCircle className="icon check-icon" />
                    <p>Genere códigos QR dinámicos y editables</p>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle className="icon check-icon" />
                    <p>Haga un seguimiento analítico de su desempeño</p>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle className="icon check-icon" />
                    <p>Diseñe códigos QR con logo, colores y formas</p>
                  </div>
                </div>

                <div className="cta-container">
                  <button className="cta-button">
                    <FaPlus className="cta-icon" /> Cree un código QR
                  </button>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
