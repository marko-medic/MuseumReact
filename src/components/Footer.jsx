import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
      
    }
    
    render(){
        return (
            <div class="site-footer">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <h6>O muzeju</h6>
                    <p class="text-justify">Unutar zbirki pet odeljenja Muzeja smešteno je preko 33.000 muzejskih predmeta a pomenućemo samo nekoliko najznačajnijih zbirki: zbirka hladnog i vatrenog oružja, zbirka kapa zlatara, likovna zbirka sa značajnim fondom slika iz XVIII i XIX veka, zbirka nakita iz praistorije i srednjeg veka, zbirka ptica. Muzej ima i Pedagoško-informativnu službu, Dokumentacioni centar, restauratorsku i konzervatorsku radionicu, fotografsko odeljenje kao i stolarsku radionicu. U Muzeju postoji i stručna biblioteka sa preko 5.000 naslova.</p>
                  </div>
        
                  <div class="col-sm-6 col-md-6">
                    <h6>Kategorije sajta</h6>
                    <ul class="footer-links">
                      <li><a href="#">Muzeji</a></li>
                      <li><a href="#">Izlozbene sale</a></li>
                      <li><a href="#">Izlozbe</a></li>
                      <li><a href="#">Eksponati</a></li>
                    </ul>
                  </div>
                </div>
                <hr></hr>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2021 Sva prava zadrzana
                    </p>
                  </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;