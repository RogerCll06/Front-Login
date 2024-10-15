import  { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

function SecurePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Llamada al endpoint seguro
    const fetchMessage = async () => {
      try {
        const response = await api.post('/api/v1/demo');
        setMessage(response.data);
      } catch (error) {
        console.error('Error al obtener el mensaje seguro', error);
        setMessage('No se pudo obtener el mensaje seguro');
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h2>Página Segura</h2>
      <p>{message}</p>
    </div>
  );
}

export default SecurePage;
