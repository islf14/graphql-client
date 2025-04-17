import { gql } from "@apollo/client";
import { PERSON_ALL_DETAILS_FRAGMENT } from "./graphql-queries";

export const CREATE_PERSON = gql`
  mutation Mutation($name: String!, $street: String!, $phone: String, $city: String!) {
    addPerson(name: $name, street: $street, phone: $phone, city: $city) {
      ...PersonDetails
    }
  }
  ${PERSON_ALL_DETAILS_FRAGMENT}
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