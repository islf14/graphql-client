import { gql } from "@apollo/client";
import { PERSON_ALL_DETAILS_FRAGMENT } from "./graphql-queries";

export const ADDED_PERSON = gql`
  subscription AddedPerson {
    addedPerson {
      ...PersonDetails
    }
  }
  ${PERSON_ALL_DETAILS_FRAGMENT}
`;