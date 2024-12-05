// src/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', form);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={form.username}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Ingresar</button>
      </form>
    </div>
  );
};

const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  title: { fontSize: '2rem', color: '#333' },
  form: { display: 'inline-block', marginTop: '20px' },
  input: {
    display: 'block',
    width: '100%',
    maxWidth: '300px',
    margin: '10px auto',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#28A745',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Login;
