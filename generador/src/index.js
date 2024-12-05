import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importamos los estilos desde el archivo CSS
import { FaSignInAlt, FaUserPlus, FaCheckCircle, FaPlus } from 'react-icons/fa';  // Iconos de palomita y de más
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Importamos react-router-dom

// Componentes de las páginas
import IniciarSesion from './IniciarSesion'; // Importar página de inicio de sesión

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="menu-container">
        <div className="logo">QRify<span className="highlight">Media</span></div>
        <div className="button-container">
          {/* Usamos Link para la navegación */}
          <Link to="/iniciar-sesion">
            <button className="login-button">
              <FaSignInAlt className="icon" /> Iniciar sesión
            </button>
          </Link>
          <button className="register-button">
            <FaUserPlus className="icon" /> Registrarse
          </button>
        </div>
      </div>

      {/* Texto grande y destacado */}
      <div className="qr-info">
        <h2>Creamos <span className="highlight">Códigos QR</span> Fácilmente</h2>
      </div>

      {/* Beneficios con iconos */}
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

      {/* Botón para crear código QR */}
      <div className="cta-container">
        <button className="cta-button">
          <FaPlus className="cta-icon" /> Cree un código QR
        </button>
      </div>

      {/* Rutas de las páginas */}
      <Routes>
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        {/* Aquí puedes agregar más rutas según sea necesario */}
      </Routes>
    </Router>
  </React.StrictMode>
);
