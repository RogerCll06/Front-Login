import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ username, password }); // Muestra los datos en la consola
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.token);
            navigate('/secure/demo');
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            alert('Usuario o contraseña incorrectos');
        }
    };
    

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
