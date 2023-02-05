import React, { useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { CHARACTERS_QUERY } from '../../graphql/characters';
import { CharacterList } from '../CharacterList/CharacterList';
import { CharactersData } from '../../types/CharactersData.type';
import { usePagination } from '../../hooks/usePagination';
import PaginationContainer from './PaginationContainer/PaginationContainer';

const CharacterSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [getCharacters, { loading, error, data }] = useLazyQuery<CharactersData>(CHARACTERS_QUERY, {
    variables: { name: searchTerm },
  });
  const { currentPage, setCurrentPage, charactersOnCurrentPage } = usePagination(data);

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            getCharacters();
          }
        }}
      />
      <button onClick={() => getCharacters()}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <CharacterList charactersOnCurrentPage={charactersOnCurrentPage} />
      <PaginationContainer currentPage={currentPage} setCurrentPage={setCurrentPage} data={data} />
    </div>
  );
};

export default CharacterSearch;
