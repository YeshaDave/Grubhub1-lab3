import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
import Editname from './Editname'

class BuyerProfile extends Component {

    constructor(){
        super();
        this.state = {  
            isComponent : "",
            profilePicture: "",
            profile: "",
            phone: ""
        }
        // this.handleChange = this.handleChange.bind(this);
    }  


    pictureChangeHandler = (e) => {
        this.setState({
            profilePicture : e.currentTarget.id
        })
    }

    profileChangeHandler = (e) => {
        this.setState({
            profile : e.currentTarget.id
        })
    }

    phoneChangeHandler = (e) => {
        this.setState({
            phone : e.currentTarget.id
        })
    }

    

       

    render() {

        let profilePicture = () => {
            console.log("inside profile picture")
            return(
                <div>
                    <h4 class="font-bold">Profile Picture</h4>
                    <img></img> 
                </div>
            )
        } 

        let buyerProfile = () => {
            return(
                <div>
                <div><h4 class="font-bold">Your Account</h4><br/>
                <h5 class="font-bold">Name</h5>
                </div>
                </div>
                )
                }
        //window.location.reload(false);
        const isComponent = this.state.isComponent;
        console.log(isComponent);
        let Contents = null;
   
            Contents = (
            <Editname/>);

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
                {/* <h5 class="font-bold" id="profilePicture" ><div onClick={this.handlePictureClick}>Profile Picture</div></h5><br/> */}
                <h5 class="font-bold" id="profile" ><div><a href="/bprofile">Profile</a></div></h5><br/>
                <h5 class="font-bold" id="phone" ><div><a href="/phone">Phone</a></div></h5><br/>
                <h5 class="font-bold" id="pOrders" ><div><a href="/upcomingOrders">Past Orders</a></div></h5><br/>
                <h5 class="font-bold" id="uOrders" ><div><a href="/pastOrders">Upcoming Orders</a></div></h5><br/>
                <h5>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </h5>
                </div>
                
                <div></div>

                <div class="col-md-8 profile-div">
                    <Editname/>
                   
                </div>
            </div>
        )
        }
}
export default BuyerProfile;