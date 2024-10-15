import api from '../api/axiosConfig';

export const login = async (username, password) => {
  console.log(username, password);
  try {
    const response = await api.post(`/auth/login`, {
      username,
      password,
    });
    // Guardar el token en localStorage
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};
