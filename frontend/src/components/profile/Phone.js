import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
import Editname from './Editname';
import EditPhone from './EditPhone';
import EditPicture from './EditPicture';
//import {Route} from 'react-router-dom';

class Phone extends Component {


    constructor(props) {
        super(props);
        this.handleProfileClick = this.handleProfileClick.bind(this);
        this.handlePictureClick = this.handlePictureClick.bind(this);
        this.handlePhoneClick = this.handlePhoneClick.bind(this);
        this.state = {isComponent: ""};
      }

      handleProfileClick() {
        this.setState({isComponent: "profile"});
      }

      handlePictureClick() {
        this.setState({isComponent: "picture"});
      }

      handlePhoneClick() {
        this.setState({isComponent: "phone"});
      }


    // pictureChangeHandler = (e) => {
    //     this.setState({
    //         profilePicture : e.currentTarget.id
    //     })
    // }

    // profileChangeHandler = (e) => {
    //     this.setState({
    //         profile : e.currentTarget.id
    //     })
    // }

    // phoneChangeHandler = (e) => {
    //     this.setState({
    //         phone : e.currentTarget.id
    //     })
    // }

    

    render() {
        //window.location.reload(false);
        const isComponent = this.state.isComponent;
        console.log(isComponent);
        let Contents = null;
   
            Contents = (
            <EditPhone/>);

        // else if(isComponent == "picture"){
        //     Contents = (
        //     <EditPicture/>);
        // }

        // else if(isComponent == "phone"){
        //     Contents = (
        //     <EditPhone/>);
        // }


        return(
            <div >
                <div>
                    <br/>
                    <br/>
                </div>
                <div class="col-md-3 profile-div">
                <h3 class="font-bold">Your Account</h3><br/>
                <h5 class="font-bold" id="profilePicture" ><div onClick={this.handlePictureClick}>Profile Picture</div></h5><br/>
                <h5 class="font-bold" id="profile" ><div><a href="/bprofile">Profile</a></div></h5><br/>
                <h5 class="font-bold" id="phone" ><div><a href="/phone">Phone</a></div></h5><br/>
                <h5 class="font-bold" id="pOrders" ><div><a href="/upcomingOrders">Past Orders</a></div></h5><br/>
                <h5 class="font-bold" id="uOrders" ><div><a href="/pastOrders">Upcoming Orders</a></div></h5><br/>
                <h5>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </h5>
                </div>
                
                

                <div class="col-md-8 profile-div" id="components">
                {Contents}
                {/* ReactDOM.render(element, document.getElementById('root')); */}
                </div>
            </div>
        )
    }
}

export default Phone;





// let ProfilePicture = () => {
//     console.log("inside profile picture")
//     return(
//         <div>
//             <h4 class="font-bold">Profile Picture</h4>
//             <img></img> 
//             Upload a new picture
//             <form>
//             <input type="file" name="pic" accept="image/*"></input>
//             <input type="submit">Edit Photo</input>
//             </form>

//         </div>
//     )
// } 


// let BuyerPhone = () => {
//     return(
//         <div>
//             <h4 class="font-bold">Phone Number</h4><br/>
//             <h5 class="font-bold">Home<br/>
//             6692789950
//             </h5>
//             Edit Number
//             <form>
//             <input className="form-control login-signup" name="firstName" type="text"></input>
//             <button type="submit">Update Picture</button>
//             </form>
            
//         </div>
//     )
// }
