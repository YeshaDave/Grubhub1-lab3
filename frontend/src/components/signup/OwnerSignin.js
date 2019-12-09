import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addOwnerMutation } from '../../mutation/mutations';
import { graphql } from 'react-apollo';

class OwnerSignin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstName : "",
            RestaurantName : "",
            Email : "",
            ZipCode : "",
            Password : "",
            authFlag : false,
            errormsg : ""
       }
       this.submitLogin = this.submitLogin.bind(this);
       this.nameChangeHandler = this.nameChangeHandler.bind(this);
       this.restNameChangeHandler = this.restNameChangeHandler.bind(this);
       this.emailChangeHandler = this.emailChangeHandler.bind(this);
       this.zCodeChangeHandler = this.zCodeChangeHandler.bind(this);
       this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
       }
       componentWillMount(){
        this.setState({
            authFlag : false
        })
    }

    nameChangeHandler = (e) => {
        this.setState({
            FirstName : e.target.value
        })
    }

    restNameChangeHandler = (e) => {
        this.setState({
            RestaurantName : e.target.value
        })
    }

    zCodeChangeHandler = (e) => {
        this.setState({
            ZipCode : e.target.value
        })
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
        console.log("Inside signup post request");
        e.preventDefault();
        console.log(this.state.FirstName)
        axios.defaults.withCredentials = true
        
        let response = await this.props.addOwnerMutation({
            variables : {
                FirstName : this.state.FirstName,
                RestaurantName : this.state.RestaurantName,
                Email : this.state.Email,
                Password : this.state.Password,
                ZipCode : this.state.ZipCode,
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
   

    render(){

        let redirectVar = null;
        if(this.props.authFlag == true){
            redirectVar = <Redirect to = "/ologin" />
        }
        else {

        }
        const { handleSubmit } = this.props;
        //console.log(this.props.errormsg)

        return(
            <div>
                {redirectVar}
                <div class="container">
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            
                        </div>
                        
                            <div class="form-group">
                            <form onSubmit={this.submitLogin.bind(this)}>

                                <div className="col-md-3"></div>
                                <div className="col-md-5 outer-box">
                                <form onSubmit={this.submitLogin.bind(this)}>

                                <div className="col-md-12">   
                                </div>
                                <div class="form-group" className="col-md-12">
                                <img class="img-size" src="https://restaurant.grubhub.com/img/gfr-horizontal-black_exoFEG-d4f8c467.svg"></img>
                                </div>
                                    <div class="form-group" className="col-md-12">
                                        
                                    <br/><p>{this.state.msg}</p><br/>
                                    Name<br/>

                                    <input type="text" class="form-control" name="name" onChange={this.nameChangeHandler} required />
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/><br/>
                                    Email<br/>
                                    <input type="email" class="form-control" name="email" onChange={this.emailChangeHandler} required />
                                    <br/>
                                    </div>
                                    <div class="form-group" >
                                    <div >
                                        <br/><br/>
                                    <span className="col-md-8">Restaurant Name</span>
                                    
                                    <span className="col-md-4">Zip Code</span>
                                    </div>
                                    <br/>
                                    <div>
                                    <div className="col-md-8">
                                    <input type="text" class="form-control" name="restName" onChange={this.restNameChangeHandler} required/>
                                    </div>
                                   
                                    <div className="col-md-4">
                                    <input type="text" class="form-control" name="zCode" required pattern="\d{1,8}" onChange={this.zCodeChangeHandler} required/>
                                    </div>
                                    <br/></div>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Password<br/>
                                    <input type="password" class="form-control" name="password" onChange={this.passwordChangeHandler} required />
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    
                                    <br/>
                                    <button class="btn btn-primary col-md-12">Sign In</button>
                                    </div>
                                    <div className="col-md-12 div-text">
                                    <br/>
                                    or
                                    <br/>
                                    Have an account?<a href="/ologin">Log in</a>
                                    <br/>
                                    </div>

                                    </form>

                                </div>   
                                <div className="col-md-4"></div>  
                                </form>
                            </div>           
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default graphql(addOwnerMutation, {name : "addOwnerMutation"})(OwnerSignin);



    
    

    // export default reduxForm({
    //     validate,
    //     form: "bSignup"
    // })(connect(mapStateToProps, mapDispatchStateToProps)(OwnerSignin));
    