import React, { useState } from 'react';
import './iniciarsesion.css';  // Estilos para la página de inicio de sesión
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa'; // Iconos
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirigir

const IniciarSesion = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(2); // Intentos restantes
  const [locked, setLocked] = useState(false); // Si está bloqueado
  const [timer, setTimer] = useState(0); // Temporizador para bloqueo
  const [alert, setAlert] = useState(null); // Alerta
  const navigate = useNavigate(); // Hook de navegación

  const handleSubmit = (e) => {
    e.preventDefault();

    // Si la cuenta está bloqueada, no permitir el inicio de sesión
    if (locked) {
      setAlert({ type: 'error', message: `Cuenta bloqueada. Inténtalo nuevamente en ${timer} segundos.` });
      return;
    }

    // Validar usuario y contraseña
    if (usuario === 'admin' && password === '1234') {
      setAlert({ type: 'success', message: 'Acceso correcto' });
      // Redirigir al CRUD
      navigate('/crud');  // Redirige a la página de CRUD
    } else {
      setAttempts(prevAttempts => prevAttempts - 1);
      if (attempts - 1 === 0) {
        setAlert({ type: 'error', message: 'Demasiados intentos fallidos. Espera 5 minutos.' });
        setLocked(true);
        // Temporizador de 5 minutos
        let countDown = 300;
        const interval = setInterval(() => {
          countDown -= 1;
          setTimer(countDown);
          setAlert({ type: 'error', message: `Cuenta bloqueada. Inténtalo nuevamente en ${countDown} segundos.` });
          if (countDown === 0) {
            clearInterval(interval);
            setLocked(false);
            setAttempts(2);
            setTimer(0);
            setAlert(null);
          }
        }, 1000);
      } else {
        setAlert({ type: 'error', message: `Usuario o contraseña incorrectos. Intentos restantes: ${attempts - 1}` });
      }
    }
  };

  return (
    <div className="login-container">
      <div className="qr-section">
        <img src="https://via.placeholder.com/300" alt="QR Code" className="qr-image" />
      </div>

      <div className="form-section">
        <h2>Iniciar sesión</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          {/* Alerta */}
          {alert && (
            <div className={`alert ${alert.type}`}>
              {alert.message}
            </div>
          )}

          <div className="input-group">
            <label htmlFor="usuario">Usuario</label>
            <div className="input-icon-container">
              <FaUser className="input-icon" />
              <input
                type="text"
                id="usuario"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-icon-container">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            <FaSignInAlt className="submit-icon" /> Iniciar sesión
          </button>

          <div className="register-link">
            <p>No tienes cuenta? <a href="/register">Crea una cuenta</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IniciarSesion;
