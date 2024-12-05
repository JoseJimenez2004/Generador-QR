import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importamos los estilos desde el archivo CSS
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';  // Asegúrate de tener react-icons instalado

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="menu-container">
      <div className="logo">QRify<span className="highlight">Media</span></div> {/* Logo con letras destacadas */}
      <div className="button-container">
        <button className="login-button">
          <FaSignInAlt className="icon" /> Iniciar sesión
        </button>
        <button className="register-button">
          <FaUserPlus className="icon" /> Registrarse
        </button>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Bienvenidos a mi generador de QR</h2>
    </div>
  </React.StrictMode>
);
