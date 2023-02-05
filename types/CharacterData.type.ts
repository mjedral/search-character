export interface CharacterData {
  character: {
    id: string;
    name: string;
    image: string;
    species: string;
    type: string;
    status: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
  };
}
