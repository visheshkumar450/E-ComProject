import React, { Component } from 'react'
import { Link } from 'gatsby';
import logo from '../../images/logo.png'
import {FaCartArrowDown} from 'react-icons/fa'
export default class Navbar extends Component {
    state={
        navbarState:false,
        navbarClass:"collpase navbar-collapse",
        menus:[{
            id:1,
            text:"Menu",
            url:"/"
            },{
            id:2,
            text:"About",
            url:"/about"
            },{
            id:3,
            text:"Contact",
            url:"/contact"
            }]
    }

    mytoggler=()=>{
        this.state.navbarState?this.setState({
            navbarState:false,
            navbarClass:"collapse navbar-collapse"
        }):this.setState({
            navbarState:true,
            navbarClass:"collapse navbar-collapse show"
        })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5">
                    <img src={logo} alt="Logo" width="40px"/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.mytoggler}>
                    <span className="text-white">Menu</span>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map(menus=>{
                            return(
                                <li className="nav-item" key={menus.id}>
                                <Link to={menus.url} className="nav-link text-white">{menus.text}</Link>
                            </li> 
                            )
                        })}
                        
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white" Style="font-size:1.5rem"><FaCartArrowDown/></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
