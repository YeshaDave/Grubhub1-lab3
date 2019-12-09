import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class OwnerHome extends Component {


    constructor(){
        super();
        
    }  


   

    
    render() {
       
        

        return(
            <div>
            <div class="home-background">
            <br/>
            <br/><br/>
            <br/>
            <div class="col-md-3"></div>
            <div class="col-md-5 div-home">
            <h2 class="title-font-white"></h2>
                
                <br></br><br/><br/>
            </div>
            <div class="col-md-2"></div>
            <br/><br/><br/><br/><br/><br/>
            </div>
            <div class="container">
                <br/>
                <div class="col-md-2">
                </div>
                <div class="col-md-5">
                <h1 class="title-font"> Manage Orders</h1><br/>
                <div class="order-div">
                <div class="order-div-img"><img class="order-div-img" src="https://res.cloudinary.com/grubhub-assets/image/upload/v1505252159/GHS_Food_Utensils-01_r01gfk.svg" alt="Fallback image"/>
                </div>
                <div class="order-div-text">
                <a href="/oPastOrders">See past orders</a><br/>
                </div>
                <div class="order-div-text">
                <a href="/oUpcomingOrders">See upcoming orders</a>
                </div>
                </div>
                </div>

                <div class="col-md-5">
                <h1 class="title-font"> Manage Menu</h1><br/>
                <div class="order-div">
                <div class="order-div-img"><img class="order-div-img" src="https://res.cloudinary.com/grubhub-assets/image/upload/v1505252159/GHS_Food_Utensils-01_r01gfk.svg" alt="Fallback image"/>
                </div>
                <div class="order-div-text">
                   <br/>
                </div>
                <div class="order-div-text">
                <a href="/MenuList">Go to Menu</a>
                </div>
                </div>
                </div>


            </div>

        </div>
        )
    }
}

export default OwnerHome;



