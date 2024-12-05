// src/Crud.js
import React, { useState } from 'react';

const Crud = () => {
  const [data, setData] = useState([{ id: 1, name: 'Ejemplo', description: 'Descripción' }]);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Gestión de Datos</h2>
      <button style={styles.addButton}>+ Agregar</button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button style={styles.editButton}>Editar</button>
                <button style={styles.deleteButton} onClick={() => handleDelete(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: { margin: '20px' },
  title: { fontSize: '2rem', textAlign: 'center', color: '#333' },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  editButton: {
    marginRight: '5px',
    padding: '5px 10px',
    backgroundColor: '#FFC107',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#DC3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Crud;
