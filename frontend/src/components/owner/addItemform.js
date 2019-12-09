import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';
import { addMenu } from '../../mutation/mutations';
import { graphql } from 'react-apollo';

class addItemform extends Component {

    constructor(){
        super();
        this.submitMenu = this.submitMenu.bind(this);
       // this.updateSection = this.updateSection.bind(this)
        this.state = {  
            section : "",
            item: "",
            desc : "",
            price : "",
            oEmail: "",
            sections : [],
            flag: false
        }
        this.sectionChangeHandler = this.sectionChangeHandler.bind(this);
        this.itemChangeHandler = this.itemChangeHandler.bind(this)
        this.descChangeHandler = this.descChangeHandler.bind(this)
        this.priceChangeHandler = this.priceChangeHandler.bind(this)
        this.submitMenu = this.submitMenu.bind(this)
    }  


    sectionChangeHandler = (e) => {
        this.setState({
            section: e.target.value
        })
    }

    itemChangeHandler = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    descChangeHandler = (e) => {
        this.setState({
            desc: e.target.value
        })
    }

    priceChangeHandler = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    imageChangeHandler = (e) => {
        this.setState({
            image: e.target.value
        })
    }

    submitMenu = async (e) => {
        console.log("Inside add menu request");
        e.preventDefault();
        console.log(this.state.item)
        let response = await this.props.addMenu({
            variables : {
                // FirstName : this.state.FirstName,
                // RestaurantName : this.state.RestaurantName,
                oEmail : sessionStorage.getItem("oEmail"),
                section : this.state.section,
                item: this.state.item,
                desc: this.state.desc,
                price: this.state.price
                // ZipCode : this.state.ZipCode,
                //role : "Buyer"
            }
            
        })
        this.setState({
            authFlag : true
        })
        console.log(response);
        sessionStorage.setItem("oEmail",this.state.Email)
    }


    // onImageHandle(event) {
    //     if (event.target.files && event.target.files[0]) {
    //         let reader = new FileReader();
    //         reader.onload = (e) => {
    //             this.setState({ profilePhoto: e.target.result });
    //         };
    //         reader.readAsDataURL(event.target.files[0]);
    //         this.setState({
    //             imageURL: event.target.files[0]
    //         })
    //     }
    // }


    // imageUpload = (e) => {
    //     e.preventDefault();
    //     const image = new FormData();
    //     image.append("profilePhoto", this.state.imageURL);
    //     console.log(image);
    //     axios.defaults.withCredentials = true;
    //     axios.put('http://localhost.85:3001/recruiter/profile/imageupload', image,
    //         {
    //             params: {
    //                 email: localStorage.getItem('email'),
    //             }
    //         })
    //         .then((response) => {
    //             console.log(response)
    //             //update the state with the response data
    //             this.setState({
    //                 ImageMessage: response.data.message,

    //             })
    //         }).catch(error => {
    //             console.log("else")
    //             this.setState({
    //                 ImageMessage: error.response.data.error
    //             })
    //         });
    // }
    componentDidMount(){
        // axios.post('http://localhost:3001/getSections')
        //         .then((response) => {
        //         //update the state with the response data
        //         console.log("inside componentDidMount")
        //         this.setState({
        //             sections : this.state.sections.concat(response.data) 
        //         });
        //         //this.state =  { authFlag2: cookie.load('cookie') }
        //         //console.log(this.state.authFlag2);
        //     });
    }




    render() {
        let redirectVar = null;
        console.log("inside add item", this.state.flag)
        if(this.state.flag == true){
            redirectVar = <Redirect to= "/MenuList"/> 
        }
        return (
            <div>
                {redirectVar}
                <div className="col-md-12" style={{ marginTop: "20px" }}>
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        Section Name<br /><input type="text" name="section" onChange={this.sectionChangeHandler}></input>
                    </div>
                    <br />
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        Item Name <br /><input type="text" name="item" onChange={this.itemChangeHandler}></input>
                    </div>
                    <br />
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        Description<br /><input type="text" name="desc" onChange={this.descChangeHandler} ></input>
                    </div>
                    <br />
                    {/* <div style={{ margin: "auto", textAlign: "center" }}>
                        {/* <img id="img" alt="Avatar" src={this.state.profilePhoto} style={{ width: "200px", height: "200px", borderRadius: "50%" }}></img> */}
                    </div> */}
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        Price<br /><input type="text" name="section" onChange={this.priceChangeHandler}></input>
                    </div>
                    <br />
                    <div style={{ margin: "auto", textAlign: "center" }}>
                    <button onClick={this.submitMenu}>Submit</button>
                    </div>
            </div>
        
        )
    }
}

export default graphql(addMenu, {name : "addMenu"})(addItemform);
