import { Character, CharactersData } from '../../types/CharactersData.type';
import { StyledLink, StyledList, StyledListItem } from './StyledList';

interface Props {
  charactersOnCurrentPage?: Character[];
}

export const CharacterList: React.FC<Props> = ({ charactersOnCurrentPage }) => {
  return (
    <StyledList>
      {charactersOnCurrentPage?.map((character) => (
        <StyledListItem key={character.id}>
          <StyledLink href={`/character/${character.id}`}>{character.name}</StyledLink>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
