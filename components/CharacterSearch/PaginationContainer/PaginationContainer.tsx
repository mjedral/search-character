import { CharactersData } from '../../../types/CharactersData.type';
import { StyledPaginationContainer } from './StyledPaginationContainer';

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  data?: CharactersData;
}

const PaginationContainer: React.FC<Props> = ({ currentPage, setCurrentPage, data }) => {
  return (
    <StyledPaginationContainer>
      {currentPage > 0 && (
        <button value={currentPage} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous Page
        </button>
      )}
      {data && currentPage < 4 && (
        <button value={currentPage} onClick={() => setCurrentPage(currentPage + 1)}>
          Next Page
        </button>
      )}
    </StyledPaginationContainer>
  );
};

export default PaginationContainer;
