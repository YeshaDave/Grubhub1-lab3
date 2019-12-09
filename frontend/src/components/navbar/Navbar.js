import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';

class Navbar extends Component {


    render(){

        var dispName = null;
        var link1 = null;
        var link2 = null;
        console.log("role",sessionStorage.getItem('role'))
        console.log("navbar",sessionStorage.getItem('bName'))
        if(sessionStorage.getItem('role') == "buyer"){
            dispName = sessionStorage.getItem('bName')
            link1 = "/bprofile"
            link2 = "/blogin"
        }
        else if(sessionStorage.getItem('role') == "owner"){
            dispName = sessionStorage.getItem('oName')
            link1 = "/oprofile"
            link2 = "/ologin"
        }


        return(
            <div>
                <nav class="Navbar-div">
                <div class="container-fluid">
                    <div class="navbar-header col-md-2">
                        <a class="Navbar navbar-brand navbar-nav" href=""></a>
                    </div>
                    <div class="col-md-1">Address</div>
                    <div class="col-md-2" style={{borderColor:"#000000"}}>
                    <input type="text" class="searchbar" placeholder="      Pizza, sushi, chinese" name="search" id="search"></input>
                    </div>
                    <div class="col-md-7">
                    <ul class="nav navbar-nav">
                        
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                    <li class="bag-icon">
                    <div><a href={link1}>
                    <div>Hi, {dispName}</div><a/>
                    <div><img src="https://img.icons8.com/color/10/000000/expand-arrow.png"></img></div></a></div>
                    </li>
                    <li>
                    
                    </li>
                    <li>

                    <div>  
                    <a href={link2}>Logout</a>
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/shopping-bag.png"></img>
                    </div>
                    
                    </li>
                    </ul>
                    </div>
                </div>
                
            </nav> 
            </div>

        )
    }

}

export default Navbar;

