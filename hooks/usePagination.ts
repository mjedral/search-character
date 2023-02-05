import { useState } from 'react';
import { ITEMS_PER_PAGE } from '../consts/consts';
import { CharactersData } from '../types/CharactersData.type';

export const usePagination = (data: CharactersData | undefined) => {
  const [currentPage, setCurrentPage] = useState(0);

  const charactersOnCurrentPage = data?.characters.results.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  return { currentPage, setCurrentPage, charactersOnCurrentPage };
};
