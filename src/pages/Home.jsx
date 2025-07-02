import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { featuredPlaylists } from '../data/mockData';
import PlaylistCard from '../components/PlaylistCard';

const HomeContainer = styled.div`
`;

const HomeHeader = styled.header`
  background: linear-gradient(${({ theme }) => theme.colors.primaryDark}, ${({ theme }) => theme.colors.background} 50%);
  padding: 64px ${({ theme }) => theme.spacing.large} 24px;
`;

const WelcomeTitle = styled.h2`
  font-size: 2rem; 
  font-weight: 900; 
`;

const WelcomeMessage = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const ContentWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.large};
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem; /* 24px */
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.large};
`;

const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <HomeContainer>
      <HomeHeader>
        <WelcomeTitle>
          {currentUser ? `Buenas noches, ${currentUser.email.split('@')[0]}` : 'Bienvenido a Kodigo Music'}
        </WelcomeTitle>
      </HomeHeader>

      <ContentWrapper>
        <SectionTitle>Playlists destacadas</SectionTitle>
        <PlaylistGrid>
          {featuredPlaylists.map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </PlaylistGrid>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;