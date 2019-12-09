import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
import { ownerProfileUpdate } from '../../mutation/mutations';
import { graphql } from 'react-apollo';

class OwnerProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            zip: "",
            Email: ""
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.restChangeHandler = this.restChangeHandler.bind(this);
        this.zipChangeHandler = this.zipChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.phoneChangeHandler = this.phoneChangeHandler.bind(this);
        this.cuisineChangeHandler = this.cuisineChangeHandler.bind(this);
        this.nameChangeHandler1 = this.nameChangeHandler1.bind(this)
        this.state = {isComponent: ""};
      }


    nameChangeHandler() {
        this.setState({isComponent: "name"});
      }

      restChangeHandler() {
        this.setState({isComponent: "rest"});
      }

      zipChangeHandler() {
        this.setState({isComponent: "zip"});
      }

      emailChangeHandler() {
        this.setState({isComponent: "email"});
      }

      phoneChangeHandler() {
        this.setState({isComponent: "phone"});
      }

      cuisineChangeHandler() {
        this.setState({isComponent: "cuisine"});
      }

      nameChangeHandler1 = (e) => {
        this.setState({
            name : e.target.value
        })
      }

      restChangeHandler = (e) => {
        this.setState({
            restname : e.target.value
        })
      }

      zipChangeHandler = (e) => {
        this.setState({
            zip : e.target.value
        })
      }

      emailChangeHandler = (e) => {
        this.setState({
            email : e.target.value
        })
      }

      phoneChangeHandler = (e) => {
        this.setState({
            phone : e.target.value
        })
      }

      cuisineChangeHandler = (e) => {
        this.setState({
            cuisine : e.target.value
        })
      }


      editName = async (e) => {
        e.preventDefault();
        console.log(this.state.FirstName)
        axios.defaults.withCredentials = true
        let response = await this.props.ownerProfileUpdate({
            variables : {
                FirstName : this.state.FirstName,
                //LastName : this.state.LastName,
                Email : sessionStorage.getItem("oEmail"),
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
    //   editName = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         name : this.state.name,
    //         email : sessionStorage.getItem('email')
    //     }
    //     console.log(data);
    //     console.log("inside edit phone");
    //     //set the with credentials to true
    //     axios.defaults.withCredentials = true;
    //     //make a post request with the user data
    //     axios.post('http://localhost:3001/editOwnerName',data)
    //         .then(response => {
    //             console.log("Status Code : ",response.status);
    //             if(response.status === 201){
    //                 this.setState({
    //                     authFlag : true
    //                 })
    //             }
    //             else if(response.status === 200){
    //                 this.setState({
    //                     authFlag : false,
    //                     msg : 'Credentials do not match!'
    //                 })
    //                 console.log("in else")
    //             }
    //         });
    // }

    editRest = (e) => {
        e.preventDefault();
        const data = {
            rest : this.state.rest,
            email : sessionStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editRestName',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
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

    editZip = (e) => {
        e.preventDefault();
        const data = {
            zip : this.state.zip,
            email : sessionStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editZip',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
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

    editEmail = (e) => {
        e.preventDefault();
        const data = {
            email1 : this.state.email,
            email2 : sessionStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editOwnerEmail',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
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
        axios.post('http://localhost:3001/editOwnerPhone',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
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

    editCuisine = (e) => {
        e.preventDefault();
        const data = {
            cuisine : this.state.cuisine,
            email : sessionStorage.getItem('oEmail')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editCuisine',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
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
        console.log(isComponent);
        let Contents = null;
        var name = sessionStorage.getItem('name')
        var rest = sessionStorage.getItem('restaurantName')
        var email = sessionStorage.getItem('email')
        var zip = sessionStorage.getItem('zipCode')
        var phone = sessionStorage.getItem('phone')
        var cuisine = sessionStorage.getItem('cuisine')

        //if(isComponent == "name"){    
          let Contents1 = (
            <div>
                <input type="text"onChange={this.nameChangeHandler1} placeholder={this.state.FirstName} ></input><br/>
                <button onClick={this.editName}>Edit Name</button>
            </div>);
       // }

        //else if(isComponent == "rest"){
            let Contents2 = (
            <div>
                <input type="text" onChange={this.restChangeHandler} placeholder="" ></input><br/>
                <button onClick={this.editRest}>Edit Restaurant Name</button>
            </div>);
        //}

       // else if(isComponent == "zip"){
            let Contents3 = (
            <div>
                <input type="text" onChange={this.zipChangeHandler} placeholder="" ></input><br/>
                <button onClick={this.editZip}>Edit Zip Code</button>
            </div>);
        //}

        // else if(isComponent == "email"){
            let Contents4 = (
                <div>
                <input type="text" onChange={this.emailChangeHandler} placeholder={sessionStorage.getItem("oEmail")} ></input><br/>
                <button onClick={this.editEmail}>Edit Email</button>
                </div>);
        // }

        // else if(isComponent == "phone"){
            
       

        return(
            <div >
                <div>
                    <br/>
                    <br/>
                </div>
                <div>
                    <br/>
                    <br/>
                </div>
                <div class="col-md-3 profile-div">
                <h3 class="font-bold">Your Account</h3><br/>
                <h5 class="font-bold" id="profile" ><div><a href="/oprofile">Profile</a></div></h5><br/>
                <h5 class="font-bold" id="phone" ><div><a href="/MenuList">Menu</a></div></h5><br/>
                <h5 class="font-bold" id="pOrders" ><div><a href="/oPastOrders">Past Orders</a></div></h5><br/>
                <h5 class="font-bold" id="uOrders" ><div><a href="/oUpcomingOrders">Upcoming Orders</a></div></h5><br/>
                <h5>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </h5>
                </div>
                <div>
                   
                </div>
                
                <div></div>

                <div class="col-md-9 profile-div">
            
                <div>
                    <h5 class="font-bold" id="name" onChange = {this.nameChangeHandler}>Name</h5>
                    {Contents1}<br/>
                </div>
                <div>
                <h5 class="font-bold" id="restName" onChange = {this.restChangeHandler}>Restaurant Name</h5>
                {Contents2}<br/>
                
                <h5 class="font-bold" id="zip" onChange = {this.zipChangeHandler}>ZipCode</h5>
                {Contents3}<br/>
                </div>
                <div>
                <h5 class="font-bold" id="email" onChange = {this.emailChangeHandler}>Email</h5>
                {Contents4}<br/>
                </div>
                
                </div>
                <div>
                   
                </div>
            </div>
        )
    }
}

export default graphql(ownerProfileUpdate, {name : "ownerProfileUpdate"})(OwnerProfile);
