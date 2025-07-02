import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../config/firebase';
import { useNavigate, Link } from 'react-router-dom';

import { Form, Input, Button, ErrorMessage } from '../components/StyledForm';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const HelperText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.textSecondary};

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin-left: 4px;
  }
`;

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState('');

  const onSubmit = async (data) => {
    setFirebaseError('');
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/'); // Redirige al Home después del login exitoso
    } catch (error) {
      console.error("Error al iniciar sesión:", error.code);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        setFirebaseError('El correo o la contraseña son incorrectos.');
      } else {
        setFirebaseError('Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <LoginContainer>
      <Title>Inicia sesión en Kodigo Music</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Correo electrónico"
          {...register('email', { required: 'El correo es obligatorio' })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          type="password"
          placeholder="Contraseña"
          {...register('password', { required: 'La contraseña es obligatoria' })}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        {firebaseError && <ErrorMessage>{firebaseError}</ErrorMessage>}

        <Button type="submit">Iniciar Sesión</Button>
      </Form>
      <HelperText>
        ¿No tienes una cuenta?
        <Link to="/register">Regístrate</Link>
      </HelperText>
    </LoginContainer>
  );
};

export default Login;