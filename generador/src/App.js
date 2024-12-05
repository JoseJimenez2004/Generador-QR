import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importar Router y las rutas
import './App.css';
import logo from './logo.svg'; // Tu logo
import IniciarSesion from './IniciarSesion'; // Importamos la página de inicio de sesión

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
          {/* Menú de navegación */}
          <div className="button-container">
            <Link to="/iniciar-sesion">
              <button className="login-button">Iniciar sesión</button>
            </Link>
            <button className="register-button">Registrarse</button>
          </div>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={
            <div>
              <h2>Bienvenidos a la página principal</h2>
              <p>Haz clic en "Iniciar sesión" para ir a la página de login.</p>
            </div>
          } />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
