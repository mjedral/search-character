import { useRouter } from 'next/router';
import React from 'react';
import Character from '../[character]';
import { StyledContainer } from '../../components/Container/StyledContainer';

const CharacterPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <StyledContainer>
      <Character id={id as string} />
    </StyledContainer>
  );
};

export default CharacterPage;
