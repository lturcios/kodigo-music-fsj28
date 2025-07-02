import React from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa'; 

const PlayButton = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  
  opacity: 0; // Oculto por defecto
  transform: translateY(10px);
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }
`;

const Card = styled.div`
  position: relative; 
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.medium};
  transition: background-color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: #282828;
    ${PlayButton} { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  }

  h4 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.875rem;
  }
`;

const PlaylistCard = ({ playlist }) => {
  return (
    <Card>
      <img src={playlist.cover} alt={playlist.name} />
      <h4>{playlist.name}</h4>
      <p>{playlist.description || 'Kodigo Music'}</p>
      <PlayButton>
        <FaPlay />
      </PlayButton>
    </Card>
  );
};

export default PlaylistCard;