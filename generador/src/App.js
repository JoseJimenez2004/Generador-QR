import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import IniciarSesion from './IniciarSesion';
import CrudFormulario from './crudFormulario';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>

          <div className="button-container">
            <Link to="/iniciar-sesion">
              <button className="login-button">Iniciar sesión</button>
            </Link>
            <Link to="/crud">
              <button className="crud-button">Formulario CRUD</button>
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <div>
              <h2>Bienvenidos a la página principal</h2>
              <p>Haz clic en "Iniciar sesión" para ir a la página de login.</p>
            </div>
          } />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/crud" element={<CrudFormulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
