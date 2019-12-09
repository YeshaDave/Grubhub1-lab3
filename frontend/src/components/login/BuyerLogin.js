import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import uuid from 'uuid/v1';
import { login } from '../../mutation/mutations';
import { graphql } from 'react-apollo';

class BuyerLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
            Email: "",
            Password: "",
            authFlag: false
        }

        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    componentWillMount(){
        
    }

    emailChangeHandler = (e) => {
        this.setState({
            Email : e.target.value
        })
    }

    passwordChangeHandler = (e) => {
        this.setState({
            Password : e.target.value
        })
    }
    


    
    submitLogin = async (e) => {
        console.log("Inside login post request");
        e.preventDefault();

        let response = await this.props.login({
            variables : {
                // FirstName : this.state.FirstName,
                // RestaurantName : this.state.RestaurantName,
                Email : this.state.Email,
                Password : this.state.Password,
                // ZipCode : this.state.ZipCode,
                //role : "Buyer"
            }
            
            
        }
        )
        this.setState({
            authFlag : true
        })
        console.log("auth : ",this.state.authFlag)
        console.log(response.data);
        sessionStorage.setItem("email",response.data.login.Email)

    }

    render(){
        let redirectVar = null;
        console.log("inside login.js")
        if(this.state.authFlag == true){
            redirectVar = <Redirect to= "/BuyerHome"/>    
        }

        const { handleSubmit } = this.props;

        return(
            <div>
                {redirectVar}
                <div class="container">
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            
                        </div>
                        
                            <div class="form-group">
                            
                                <div className="col-md-4"></div>
                                <div className="col-md-4  outer-box">
                                <div className="col-md-12">   
                                <h3 class="font-bold">Sign in with your Grubhub account</h3>
                                
                                </div>
                                
                                <form onSubmit={this.submitLogin.bind(this)}>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    <p class="msg-text">{this.props.errormsg}</p>
                                    <br/>
                                    <input type="email" class="form-control" name="email" onChange={this.emailChangeHandler} required />
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    <br/>
                                    <input type="password" class="form-control" name="password" onChange={this.passwordChangeHandler} required />
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <span>
                                    <br/>
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Keep me signed in           <span class="div-text2"><a>Reset Password</a></span></span><br/>
                                    <br/>
                                    <button class="btn btn-primary col-md-12 login-button"><img class="button-img" src="https://www.grubhub.com/img-hashed/grubhub_logo_img-f32224c65999bc87a7d65983e133e9fd.svg"></img>Sign In</button>
                                    <br/><br/><br></br>
                                    </div>
                                    <div class="div-text">
                                    <br/><br/>
                                        or
                                    </div>
                                    <div class="div-text">
                                    <br/>
                                        <a href="/bsignup">Create your account </a>
                                    </div>
                                    </form>
                                </div>   
                                <div className="col-md-4"></div>  
                            </div>           
                        </div>
                </div>
            </div>
            </div>
        )
    }
}


export default graphql(login, {name : "login"})(BuyerLogin);

