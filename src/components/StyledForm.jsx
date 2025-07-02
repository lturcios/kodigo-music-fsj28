import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  max-width: 400px;
  margin: 50px auto;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.surface};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  padding: 12px;
  border-radius: 50px; /* Botones redondeados tipo Spotify */
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ErrorMessage = styled.p`
  color: #ff6b6b; // Un color de error
  font-size: 0.875rem;
`;