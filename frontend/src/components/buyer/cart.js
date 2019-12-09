import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';
// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
//import Popup from "reactjs-popup";
import Modal from 'react-responsive-modal';
import uuid from 'uuid/v1';

class cart extends Component {

    constructor() {
        super();

        this.state = {
            menu: [],
            orderID: "",
            total: 0
        }
    }

    componentDidMount() {
        const data = {
            //rId: this.props.location.state.rId,
            rName: this.props.location.state.rName,
            orderID: this.props.location.state.orderID
        }
        console.log(data)
        axios.post('http://localhost:3001/getCart', data)
            .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount")
                console.log("Response DATA: ",response.data)
                this.setState({
                    menu: this.state.menu.concat(response.data.updatedList),
                    total: this.state.total+this.state.menu.price,
                    orderID: this.state.menu.orderID
                });

                console.log("State DATA: ",this.state.menu)
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });
    }



    render() {
        let total = 0;
        let Cart = this.state.menu.map(menu => {
            if (menu != null)
                return (

                    <div className="search">
                        <br/>{menu.item}
                        <br/>{menu.price}
                    </div>
                )
        })

        return(

            <div>
            <div class="home-background">
            <br/>
            <br/><br/>
            <br/>
            <div class="col-md-3"></div>
            <div class="col-md-2"></div>
            <br/><br/><br/><br/><br/><br/>
            </div>
            <div class="container">
                <br/>
                <div class="col-md-2">
                </div>
                <div class="col-md-10">
                <h1 class="title-font"> Your Orders</h1><br/>
                {this.state.menu.orderID}
                <div class="order-div">
                {Cart}
                </div>
                {this.state.total}
                </div>
                
            </div>
            
            <div>
                
            </div>
            </div>
        )
    }
}

export default cart;