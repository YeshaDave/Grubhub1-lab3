import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Redirect } from 'react-router';
//import { connect } from "react-redux";
//import { Field, reduxForm } from "redux-form";
//import jwt_decode from 'jwt-decode';
import '../../App.css';
//import { relative } from 'path';
import { buyerProfileUpdate } from '../../mutation/mutations';
import { graphql } from 'react-apollo';

class Editname extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: "",
            Email: ""
        }
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleEmailClick = this.handleEmailClick.bind(this);
        this.handlePasswordClick = this.handlePasswordClick.bind(this);
        this.editName = this.editName.bind(this)
        this.state = {isComponent: ""};
      }

      handleNameClick() {
        this.setState({isComponent: "name"});
      }

      handleEmailClick() {
        this.setState({isComponent: "email"});
      }

      handlePasswordClick() {
        this.setState({isComponent: "password"});
      }
    

      fnameChangeHandler = (e) => {
        this.setState({
            FirstName : e.target.value
        })
      }

      lnameChangeHandler = (e) => {
        this.setState({
            LastName : e.target.value
        })
      }

      emailChangeHandler = (e) => {
        this.setState({
            email : e.target.value
        })
      }



      editName = async (e) => {
        e.preventDefault();
        console.log(this.state.FirstName)
        axios.defaults.withCredentials = true
        let response = await this.props.buyerProfileUpdate({
            variables : {
                FirstName : this.state.FirstName,
                LastName : this.state.LastName,
                Email : sessionStorage.getItem("email"),
                //Password : this.state.Password,
                //Phone : this.state.Phone,
                //role : "Buyer"
            }
        }).then(res => {
            this.setState({
                authFlag: true
            })
            console.log("The received response is : ", res);
        }).catch(e => {
            this.setState({
                authFlag: false
            })
        })
    }




    editEmail = (e) => {
        //e.preventDefault();
        const data = {
            email1 : this.state.email,
            email2 : sessionStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editBuyerEmail',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                    sessionStorage.setItem('email',this.state.email)
                }
                else if(response.status === 200){
                    this.setState({
                        authFlag : false,
                        msg : 'Credentials do not match!'
                    })
                    console.log("in else")
                }
            });
    }




    render() {

        const isComponent = this.state.isComponent;

        let Contents;


        var fName = sessionStorage.getItem('fName')
        var lName = sessionStorage.getItem('lName')
        var email = sessionStorage.getItem('email')

        if(isComponent == "name"){
            Contents = (
                <div>
                <form>
                <h4 class="font-bold">Edit Name</h4><br/>
                <h6 class="font-bold">First Name</h6><br/>
                <input type="text" name="firstname" onChange={this.fnameChangeHandler} placeholder={fName}/><br/>
                <h6 class="font-bold">Last Name</h6><br/>
                <input type="text" name="lastname" onChange={this.lnameChangeHandler} placeholder={lName}/><br/>
                {/* <h6 class="font-bold">Current Password</h6><br/> */}
                {/* <input type="text" name="currentPassword"/><br/> */}
                <button type="submit" onClick={this.editName}>Update Name</button>
                <button>Cancel</button>
                </form>
                </div>
            )
        }

        else if(isComponent == "email"){
            Contents = (
            <div>
                <form>
                <h4 class="font-bold">Edit Email</h4><br/>
                <h6 class="font-bold">New Email</h6><br/>
                <br/>
                <input type="text" name="newEmail" onChange={this.emailChangeHandler}/><br/>
                <h6 class="font-bold">Current Email</h6><br/>
                <input type="text" name="currentEmail"/><br/>
                {/* <h6 class="font-bold">Current Password</h6><br/>
                <input type="text" name="currentPassword" component={this.renderFieldPassword}/><br/> */}
                <button type="submit" onClick={this.editEmail}>Update Email</button>
                <button>Cancel</button>
                </form>
            </div>
            )
        }

        // else if(isComponent == "password"){
        //     Contents = (
        //         <div>
        //         <form>
        //         <h4 class="font-bold">Edit Password</h4><br/>
        //         <h6 class="font-bold">Current Password</h6><br/>
        //         <input type="text" name="currentPassword" component={this.renderFieldPassword}/><br/>
        //         <h6 class="font-bold">New Password</h6><br/>
        //         <input type="text" name="newPassword" component={this.renderFieldPassword}/><br/>
        //         <h6 class="font-bold">Confirm Password</h6><br/>
        //         <input type="text" name="confirmPassword" component={this.renderFieldPassword}/><br/>
        //         <button type="submit">Update Password</button>
        //         <button>Cancel</button>
        //         </form>
        //         </div>
        //     )
        // }

        return(
            <div>
                {/* your account section */}
                <div>
                <div><h4 class="font-bold">Your Account</h4><br/>
                    <h5 class="font-bold">Name</h5>
                    <button onClick={this.handleNameClick}>Edit</button>
                </div>
                <div>
                    <h5 class="font-bold">Email</h5>
                    <button onClick={this.handleEmailClick}>Edit</button>
                </div>
                {/* <div>
                    <h5 class="font-bold">Password</h5>
                    { <button onClick={this.handlePasswordClick}>Edit</button> }
                </div> */}
                <div>
                    {Contents}
                </div>
                </div>


                



            </div>
        )
    }
}

export default graphql(buyerProfileUpdate, {name : "buyerProfileUpdate"})(Editname);
