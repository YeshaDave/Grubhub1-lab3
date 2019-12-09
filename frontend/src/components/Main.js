import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import BuyerSignup from './signup/BuyerSignup';
import BuyerLogin from './login/BuyerLogin';
import OwnerLogin from './login/OwnerLogin';
import OwnerProfile from './profile/OwnerProfile';
import OwnerSignin from './signup/OwnerSignin';
//import OSignup from './signup/Signup1'
import BuyerProfile from './profile/BuyerProfile';
import Editname from './profile/Editname';
import EditPhone from './profile/EditPhone';
import Phone from './profile/Phone';
import MenuList from './owner/menuList';
import UpdateItems from './owner/updateItems';
import BuyerHome from './buyer/buyerHome';
import OwnerHome from './owner/OwnerHome';
import Search from './buyer/search';
import Details from './buyer/details'
import UpcomingOrders from './buyer/upcomingOrders';
import PastOrders from './buyer/pastOrders';
import AddSections from './owner/addSection';
//import MenuItems from './owner/menuItems';
import OPastOrders from './owner/OwnerPastOrders';
import OUpcomingOrders from './owner/OwnerUpcomingOrders';
import addItem from './owner/addItemform';
import cart from './buyer/cart';

class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" component={Navbar}/>
                <Route path="/bsignup" component={BuyerSignup}/>
                <Route path="/blogin" component={BuyerLogin}/>
                <Route path="/ologin" component={OwnerLogin}/>
                <Route path="/osignin" component={OwnerSignin}/>
                <Route path="/bprofile" component={BuyerProfile}/>
                <Route path="/oprofile" component={OwnerProfile}/>
                <Route path="/editName" component={Editname}/>
                <Route path="/EditPhone" component={EditPhone}/>
                <Route path="/MenuList" component={MenuList}/>
                <Route path="/updateItems" component={UpdateItems}/>
                <Route path="/BuyerHome" component={BuyerHome}/>
                <Route path="/search" component={Search}/>
                <Route path="/details" component={Details}/>
                <Route path="/upcomingOrders" component={UpcomingOrders}/>
                <Route path="/pastOrders" component={PastOrders}/>
                <Route path="/addSection" component={AddSections}/>
                {/* <Route path="/menuItems" component={MenuItems}/> */}
                <Route path="/phone" component={Phone}/>
                <Route path="/oPastOrders" component={OPastOrders}/>
                <Route path="/oUpcomingOrders" component={OUpcomingOrders}/>
                <Route path="/oHome" component={OwnerHome}/>
                <Route path="/addItem" component={addItem}/>
                <Route path="/cart" component={cart}/>
                {/* <Route path="/osignup1" component={OSignup}/> */}
            </div>
        )
    }
}
//Export The Main Component
export default Main;