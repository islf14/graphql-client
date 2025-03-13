import { gql } from "@apollo/client";

export const ALL_PERSONS = gql`
  query Query {
    allPersons{
      id
      name
      phone
    }
  }
`;

export const FIND_PERSON = gql`
  query Query($name: String!) {
    findPerson(name: $name) {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`;
