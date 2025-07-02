import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'; // Importar la config de Firebase
import { Link, useNavigate } from 'react-router-dom'; 

import { Form, Input, Button, ErrorMessage } from '../components/StyledForm';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState('');

  const onSubmit = async (data) => {
    setFirebaseError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log('Usuario registrado:', userCredential.user);
      navigate('/'); // Redirige al Home después del registro exitoso
    } catch (error) {
      console.error("Error al registrar:", error.message);
      setFirebaseError('Error al registrar. El correo ya podría estar en uso.');
    }
  };

  return (
    <RegisterContainer>
      <h2>Crea tu cuenta en Kodigo Music</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Correo electrónico"
          {...register('email', {
            required: 'El correo es obligatorio',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Formato de correo inválido'
            }
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          type="password"
          placeholder="Contraseña"
          {...register('password', {
            required: 'La contraseña es obligatoria',
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres'
            }
          })}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <Button type="submit">Registrarse</Button>
        {firebaseError && <ErrorMessage>{firebaseError}</ErrorMessage>}
      </Form>
      <HelperText>
        ¿Ya tienes una cuenta?
        <Link to="/login">Inicia Sesión</Link>
      </HelperText>
    </RegisterContainer>
  );
};

export default Register;