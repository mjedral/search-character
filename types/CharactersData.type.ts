export interface Character {
  id: string;
  name: string;
}

export interface CharactersData {
  characters: {
    results: Character[];
  };
}
