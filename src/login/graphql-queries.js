import { gql } from "@apollo/client";

export const LOGINnn = gql`
  query Query {
    allPersons{
      id
      name
      phone
    }
  }
`;