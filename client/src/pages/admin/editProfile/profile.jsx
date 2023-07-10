import React, { useState } from 'react';
import axios from 'axios';
import './editProfile.css'


const API_URL = 'http://example.com/admin/profile'; // URL de tu servidor web

export const EditProfile = () => {
  const [password, setPassword] = useState(''); // Hook para la contraseña
  const [email, setEmail] = useState(''); // Hook para el correo electrónico
  const [phoneNumber, setPhoneNumber] = useState(''); // Hook para el número de teléfono
  const [name, setName] = useState(''); // Hook para el nombre

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(API_URL, {
        password,
        email,
        phoneNumber,
        name,
      });
      // Mensaje de requerimiento exitoso
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="editProfile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};
