import { gql } from "@apollo/client";

export const PERSON_ALL_DETAILS_FRAGMENT = gql`
  fragment PersonDetails on Person {
    name
    phone
    address {
      street
      city
    }
    id
  }
`;

export const ALL_PERSONS = gql`
  query Query {
    allPersons{
      ...PersonDetails
    }
  }
  ${PERSON_ALL_DETAILS_FRAGMENT}
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
