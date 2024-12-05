import React, { useState } from 'react';
import './crudFormulario.css';  // Estilos para el formulario CRUD
import { FaQrcode, FaSave, FaEdit, FaTrash } from 'react-icons/fa'; // Iconos para los botones

const CrudFormulario = () => {
  // Estado para almacenar los datos del formulario
  const [data, setData] = useState({
    nombre: '',
    descripcion: '',
  });

  // Estado para manejar los datos de la lista
  const [items, setItems] = useState([]);

  // Función para manejar el cambio de los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Función para agregar un nuevo elemento
  const handleAdd = () => {
    if (data.nombre && data.descripcion) {
      setItems([...items, data]);
      setData({ nombre: '', descripcion: '' }); // Limpiar los campos
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  // Función para generar QR basado en los datos
  const generateQRCode = (text) => {
    const encodedText = encodeURIComponent(text);
    return `https://api.qrserver.com/v1/create-qr-code/?data=${encodedText}&size=200x200`;
  };

  // Función para eliminar un elemento
  const handleDelete = (index) => {
    const updatedItems = items.filter((_, idx) => idx !== index);
    setItems(updatedItems);
  };

  return (
    <div className="crud-container">
      <h2>Formulario CRUD con Generación de QR</h2>

      {/* Formulario de ingreso */}
      <div className="form-container">
        <div className="input-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={data.nombre}
            onChange={handleChange}
            placeholder="Ingresa el nombre"
          />
        </div>

        <div className="input-group">
          <label htmlFor="descripcion">Descripción</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={data.descripcion}
            onChange={handleChange}
            placeholder="Ingresa una descripción"
          />
        </div>

        <button className="submit-button" onClick={handleAdd}>
          <FaSave className="submit-icon" /> Guardar
        </button>
      </div>

      {/* Mostrar los elementos y sus códigos QR */}
      <div className="items-list">
        <h3>Lista de Elementos</h3>
        {items.length === 0 ? (
          <p>No hay elementos guardados</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="item">
              <div className="item-info">
                <p><strong>Nombre:</strong> {item.nombre}</p>
                <p><strong>Descripción:</strong> {item.descripcion}</p>
              </div>
              <div className="qr-code">
                <img src={generateQRCode(item.nombre)} alt="QR Code" />
              </div>
              <div className="actions">
                <button className="action-button edit-button">
                  <FaEdit /> Editar
                </button>
                <button className="action-button delete-button" onClick={() => handleDelete(index)}>
                  <FaTrash /> Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CrudFormulario;
