import React, { Component } from 'react';
import linkedin from '../resource/pin.png';
import facebook from '../resource/fb.png';
import instagram from '../resource/ig.png';

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
      
    }
    
    render(){
        return (
            <div className = "footer">
                <div className = "footer-content">
                <ul>
                    <li>Muzeji Srbije</li>
                    <li>Srbija</li>
                    <li>E-mail: muzejisrb@gmail.com</li>
                </ul>
                <ul>
                    <li><a>Kontakt</a></li>
                    <li><a>Popularni muzej</a></li>
                    <li><a>O muzeju</a></li>
                </ul>
                <ul>
                    <li><a>Shops</a></li>
                   
                </ul>
                <ul className = "icons-footer">
               <a><img src={linkedin} /></a>
               <a> <img src={facebook} /></a>
               <a> <img src={instagram} /></a>
                    </ul>
            </div>
          </div>
        );
    }
}

export default Footer;