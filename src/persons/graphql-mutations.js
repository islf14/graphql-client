import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation Mutation($name: String!, $street: String!, $phone: String, $city: String!) {
    addPerson(name: $name, street: $street, phone: $phone, city: $city) {
      name
      phone
      address {
        city
        street
      }
      id
    }
  }
`;

export const EDIT_NUMBER = gql`
  mutation Mutation($name: String!, $phone: String!) {
  editNumber(name: $name, phone: $phone) {
    name
    phone
    id
    address {
      city
      street
    }
  }
}
`;