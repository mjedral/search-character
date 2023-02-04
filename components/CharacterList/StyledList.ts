import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;

export const StyledListItem = styled.li`
  cursor: pointer;
  padding: 8px;
  &:hover {
    background-color: lightgray;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`;
