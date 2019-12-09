import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import uuid from 'uuid/v1';

class buyerHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item : "",
       }
       }

    itemChangeHandler = (e) => {
        this.setState({
            item : e.target.value
        })
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div >
                <label>{field.label}</label>
                <input class="search-bar" type="text" {...field.input} />
                <div >
                    {touched ? error : ""}
                </div>
            </div>
        )
    }

    // submitLogin(values) {
    //     this.props.search(values);
    //     console.log(this);
    // }

    goTo = (index) => {
        console.log("item",this.state.item)
      // sessionStorage.getItem('rid')
       // console.log(this.state.rId)
        this.props.history.push({
            pathname: '/search',
            state: {
                item : this.state.item
            }
        })
    }

    render() {
        const { handleSubmit } = this.props;
        return (
        <div>
            <div class="home-background">
            <br/>
            <br/><br/>
            <br/>
            <div class="col-md-3"></div>
            {/* <form onSubmit={handleSubmit(this.submitLogin.bind(this))}> */}
            <div class="col-md-5 div-home">
            
            <h2 class="title-font-white">Who delivers in your neighborhood?</h2>
            {/* <Field name="search" component={this.renderField}/> */}
                <input type="text" class="search-bar" name="search" id="search" onChange={this.itemChangeHandler}></input>
                <button class="search-bar-find search-bar-text" onClick={this.goTo}>Find food</button>
                <br></br><br/><br/>
            </div>
            {/* </form> */}

            <div class="col-md-2"></div>
            <br/><br/><br/><br/><br/><br/>
            </div>
            <div class="container">
                <br/>
                <div class="col-md-2">
                </div>
                <div class="col-md-10">
                <h1 class="title-font"> Your Orders</h1><br/>
                <div class="order-div">
                <div class="order-div-img"><img class="order-div-img" src="https://res.cloudinary.com/grubhub-assets/image/upload/v1505252159/GHS_Food_Utensils-01_r01gfk.svg" alt="Fallback image"/>
                </div>
                <div class="order-div-text">
                    Mix it up! Try a new restaurant today<br/>
                </div>
                <div class="order-div-link">
                <a href="/search">Find local options</a>
                </div>
                </div>
                </div>
                <h5><a>See all past orders</a></h5>
            </div>

        </div>
        )
    }
}

export default buyerHome;

// function validate(values){

//     let errors = {};
    
//     if(!values.search){
//         errors.search = "";
//     }
// }

// const mapStateToProps = state => {
//     return {
//         authFlag: state.bSignup.authFlag,
//         errormsg: state.bSignup.errormsg
//     }
// }



// const mapDispatchStateToProps = dispatch => {
//     return {
//         // this.props.history.push({
//         //     pathname: '/search',
//         //     state: {
//         //         item : this.state.item
//         //     }
//         // })
//         search: (values) => {
//             const data = {
//                 name : values.name,
//                 restName : values.restName,
//                 zCode : values.zCode,
//                 email: values.email,
//                 password: values.password
//             }
//             //data["isRecruiter"] = recruiter

//             axios.defaults.withCredentials = true;
//             axios.post('http://localhost:3001/ownerSignup1', data)
//                 .then((response) => {
//                     console.log(response.data)
//                     dispatch({ type: 'SIGNUP', payload: response.data, statusCode: response.status })
//                 })
//                 .catch((error) => {
//                     dispatch({ type: 'SIGNUP', payload: error.response.data, statusCode: error.response.data.status })
//                 });
//         }
//     }
// }

// export default reduxForm({
//     validate,
//     form: "bSignup"
// })(connect(mapStateToProps, mapDispatchStateToProps)(buyerHome));