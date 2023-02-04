import styled from 'styled-components';

export const StyledCharacterDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
  padding: 1em;
  border-radius: 5px;
  width: 300px;
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 1em;
  }

  p {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
`;
