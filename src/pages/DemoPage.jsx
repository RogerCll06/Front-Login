import { useState, useEffect } from 'react';
import api from '../api/axiosConfig';

const DemoPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Llamada al endpoint seguro
    const fetchCredentials = async () => {
      try {
        const response = await api.post('/v1/credentials');
        console.log(response)
        setUsername(response.data.username);
        setPassword(response.data.password);
      } catch (error) {
        console.error('Error al obtener las credenciales', error);
        setUsername('No se pudieron obtener las credenciales');
        setPassword('');
      }
    };

    fetchCredentials();
  }, []);

  return (
    <div>
      <h2>Página Segura</h2>
      <p>¡Bienvenido a la página segura!</p>
      <p>Nombre de Usuario: {username}</p>
      <p>Contraseña: {password}</p>
    </div>
  );
};

export default DemoPage;