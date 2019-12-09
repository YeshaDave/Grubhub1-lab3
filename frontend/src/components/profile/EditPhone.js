import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Redirect } from 'react-router';
//import { connect } from "react-redux";
//import { Field, reduxForm } from "redux-form";
//import jwt_decode from 'jwt-decode';
import '../../App.css';

class EditPhone extends Component {

    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.state = {isComponent: ""};
      }

    handleEditClick() {
        this.setState({isComponent: "edit"});
    }

    handleDeleteClick() {
        this.setState({isComponent: "delete"});
    }

    componentWillMount(){
        this.setState({
            authFlag : false
        })
    }

    phoneChangeHandler = (e) => {
        this.setState({
            phone : e.target.value
        })
    }

    editPhone = (e) => {
        e.preventDefault();
        const data = {
            phone : this.state.phone,
            email : sessionStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editBuyerPhone',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                    sessionStorage.setItem('phone',this.state.phone)
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

        var phone = sessionStorage.getItem('phone')
        // var email = sessionStorage.getItem('email')
        console.log(phone)

        const isComponent = this.state.isComponent;

        let Contents;

        if(isComponent == "edit"){
            Contents = (
                <div>
                    <h5>Phone</h5><br/>
                    <input type="text" name="phone" onChange={this.phoneChangeHandler} placeholder={phone}></input>
                    <button onClick={this.editPhone}>Submit</button>
                    <button>Cancel</button>

                </div>
            )
        }

        else if(isComponent == "delete"){
            Contents = (
                <div>
                    <h5>Are you sure?</h5>
                    <button>Delete</button>
                    <button>Cancel</button>
                </div>
            )
        }

        return(
            <div>
                <div><h4 class="font-bold">Phone</h4><br/>
                <br/>
                    
                    <button onClick={this.handleEditClick}>Edit</button>
                    {/* <button onClick={this.handleDeleteClick}>Delete</button> */}
                </div>
                <div>
                    {Contents}
                </div>
            </div>

        )
    }
}

export default EditPhone;