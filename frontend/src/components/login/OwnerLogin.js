import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { ologin } from '../../mutation/mutations';
import { graphql } from 'react-apollo';

class OwnerLogin extends Component {

    constructor(props){
        super(props);
        this.state = {   
            authFlag: false
        }
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

        let response = await this.props.ologin({
            variables : {
                // FirstName : this.state.FirstName,
                // RestaurantName : this.state.RestaurantName,
                Email : this.state.Email,
                Password : this.state.Password,
                // ZipCode : this.state.ZipCode,
                //role : "Buyer"
            }
            
        })
        this.setState({
            authFlag : true
        })
        console.log(response.data);
        sessionStorage.setItem("oEmail",this.state.Email)
    }

    

    render(){
        let redirectVar = null;
        console.log("inside login.js")
        console.log("auth flag : ", this.state.authFlag)
        if(this.state.authFlag == true){
            redirectVar = <Redirect to= "/oHome"/>
        }
        else if(this.state.authFlag == false){
            redirectVar = <Redirect to="/ologin"/>
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
                                <div className="col-md-5">
                                <div className="col-md-12">   
                                </div>
                                <div class="form-group" className="col-md-12">
                                <img class="img-size" src="https://restaurant.grubhub.com/img/gfr-horizontal-black_exoFEG-d4f8c467.svg"></img>
                                </div>
                                <form onSubmit={this.submitLogin.bind(this)}>
                                   
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    <p class="msg-text">
                                    {this.props.errormsg}</p>
                                    <br/>
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
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Remember me</span><br/>
                                    <br/>
                                    <button class="btn btn-primary col-md-12">Sign In</button>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    <br/>
                                    
                                    <br/>
                                    <br/>
                                    
                                    </div>
                                </form>
                                </div>   
                                <div className="col-md-3"></div>  
                            </div>           
                        </div>
                </div>
            </div>
            </div>
        )
    }
}







export default graphql(ologin, {name : "ologin"})(OwnerLogin);

