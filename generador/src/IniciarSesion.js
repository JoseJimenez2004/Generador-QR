import React from 'react';
import './index.css';  // Estilos para la página de inicio de sesión
import './iniciarsesion.css';  // Estilos para la página de inicio de sesión
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa'; // Iconos

const IniciarSesion = () => {
  return (
    <div> 
      {/* Página de Inicio de Sesión */}
      <div className="login-container">
        <div className="qr-section">
          {/* Aquí puedes agregar un QR grande */}
          <img src="https://via.placeholder.com/300" alt="QR Code" className="qr-image" />
        </div>

        <div className="form-section">
          <h2>Iniciar sesión</h2>
          <div className="form-container">
            <div className="input-group">
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-icon-container">
                <FaEnvelope className="input-icon" />
                <input type="email" id="email" placeholder="Correo electrónico" required />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-icon-container">
                <FaLock className="input-icon" />
                <input type="password" id="password" placeholder="Contraseña" required />
              </div>
            </div>

            <button type="submit" className="submit-button">
              <FaSignInAlt className="submit-icon" /> Iniciar sesión
            </button>

            <div className="register-link">
              <p>No tienes cuenta? <a href="/register">Crea una cuenta</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IniciarSesion;
