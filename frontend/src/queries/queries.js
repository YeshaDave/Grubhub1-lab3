import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getMenubyemail = gql`
    {
        menu {
            oEmail
        }
    }
`;


const getMenubyname = gql`
    {
        menu {
            rName
        }
    }
`;

export { getAuthorsQuery, getMenubyemail, getMenubyname };