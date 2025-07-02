import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; 

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Content = styled.main`
  flex-grow: 1;
  overflow-y: auto; // Permite scroll solo en el área de contenido
  padding: ${({ theme }) => theme.spacing.large};
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;