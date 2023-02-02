import gql from 'graphql-tag';

export const CHARACTERS_QUERY = gql`
  query Characters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        species
        type
        status
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      type
      status
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;
