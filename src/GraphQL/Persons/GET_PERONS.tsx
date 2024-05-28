import { gql } from "@apollo/client";

export const GET_PERSONS = gql `
      query {
        employees {
          IsDeveloper
          IsDualWork
          PerNom1
          PerApe2
          PerMail
          PerCod
          PerCel
        }
    }

`
;