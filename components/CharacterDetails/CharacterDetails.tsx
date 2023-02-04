import { CharacterData } from '../../types/CharacterData.type';
import { StyledCharacterDetails } from './StyledCharacterDetails';

export const CharacterDetails = ({ character }: CharacterData) => {
  return (
    <StyledCharacterDetails>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Species: {character.species}</p>
      <p>Type: {character.type}</p>
      <p>Status: {character.status}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
    </StyledCharacterDetails>
  );
};
