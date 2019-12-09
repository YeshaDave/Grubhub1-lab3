import {gql} from 'apollo-boost';

const addBuyerMutation = gql`
    mutation addBuyer($FirstName: String, $LastName: String, $Email: String, $Password : String) {
            addBuyer(FirstName: $FirstName, LastName: $LastName, Email: $Email, Password: $Password) {
                FirstName,
                LastName,
                Email,
                Password
            }
        }
`;

const addOwnerMutation = gql`
    mutation addOwner($FirstName: String, $RestaurantName: String, $Email: String, $Password : String, $ZipCode:String) {
            addOwner(FirstName: $FirstName, RestaurantName: $RestaurantName, Email: $Email, Password: $Password, ZipCode: $ZipCode) {
                FirstName,
                RestaurantName,
                Email,
                Password,
                ZipCode
            }
        }        
`;

const login = gql`
    mutation login($Email : String, $Password : String) {
        login(Email : $Email, Password : $Password) {
            FirstName,
            LastName,
            Email
        }
    }
`;

const ologin = gql`
    mutation ologin($Email : String, $Password : String) {
        ologin(Email : $Email, Password : $Password) {
            FirstName,
            Email,
            RestaurantName,
            ZipCode
        }
    }
`;

const addSections = gql`
    mutation addSections($section : String, $oEmail : String) {
        addSections(section : $section, oEmail : $oEmail) {
            section,
            oEmail
        }
    }
`;

const addMenu = gql`
    mutation addMenu($section : String, $item : String, $desc : String, $price : String, $oEmail : String) {
        addMenu(section : $section, item : $item, desc : $desc, price : $price, oEmail : $oEmail) {
            section,
            item,
            desc,
            price,
            oEmail
        }
    }
`;


const buyerProfileUpdate = gql`
    mutation buyerProfileUpdate($FirstName:String, $LastName : String, $Email : String) {
        buyerProfileUpdate(FirstName : $FirstName, LastName : $LastName, Email : $Email) {
            FirstName,
            LastName,
            Email
        }
    }
`;

const ownerProfileUpdate = gql`
    mutation buyerProfileUpdate($FirstName:String, $Email : String) {
        buyerProfileUpdate(FirstName : $FirstName, Email : $Email) {
            FirstName,
            Email
        }
    }
`;

export {addBuyerMutation, addOwnerMutation, login, ologin, buyerProfileUpdate, ownerProfileUpdate, addSections, addMenu};