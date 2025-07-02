import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { GoHome, GoPerson, GoSignIn, GoSignOut } from 'react-icons/go';
import { useAuth } from '../contexts/AuthContext'; 
import { signOut } from 'firebase/auth'; 
import { auth } from '../config/firebase';

const SidebarContainer = styled.aside`
  width: 240px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  border-right: 1px solid ${({ theme }) => theme.colors.surface};
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  flex-grow: 1; 
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  font-size: 1rem;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.surface};
  }

  svg {
    font-size: 1.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.2s;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  svg {
    font-size: 1.5rem;
  }
`;

const Sidebar = () => {
  const { currentUser } = useAuth(); // Obtenemos el usuario actual del contexto
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); 
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return (
    <SidebarContainer>
      <Logo>Kodigo Music</Logo>
      <NavList>
        <NavItem to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <GoHome />
          <span>Inicio</span>
        </NavItem>

        {!currentUser ? (
          <>
            <NavItem to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
              <GoSignIn />
              <span>Iniciar Sesión</span>
            </NavItem>
            <NavItem to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>
              <GoPerson />
              <span>Registro</span>
            </NavItem>
          </>
        ) : (
          <NavItem as="div" onClick={handleLogout}>
            <GoSignOut />
            <span>Cerrar Sesión</span>
          </NavItem>
        )}
      </NavList>
    </SidebarContainer>
  );
};


export default Sidebar;