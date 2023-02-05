import React from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTER_QUERY } from '../graphql/characters';
import { CharacterDetails } from '../components/CharacterDetails/CharacterDetails';
import { CharacterData } from '../types/CharacterData.type';

interface Props {
  id: string;
}

const Character: React.FC<Props> = ({ id }) => {
  const { loading, error, data } = useQuery<CharacterData>(CHARACTER_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const character = data?.character;

  return character ? <CharacterDetails character={character} /> : <div>There is no data...</div>;
};

export default Character;
