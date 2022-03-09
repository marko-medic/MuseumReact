import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { serviceConfig } from "../../../appSettings";
import { Container, Card, CardGroup, Button,ResponsiveEmbed, CardDeck} from 'react-bootstrap';

class AllMuseums extends Component {
    constructor(props) {
      super(props);
      this.state = {
        museums: []
      };
    }

    componentDidMount() {
       this.getMuseums();
    }

    getMuseums() {
      const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };

      fetch(`${serviceConfig.baseURL}/api/Museums`, requestOptions)
        .then(response => {
          if (!response.ok) {
            return Promise.reject(response);
        }
        return response.json();
        })
        .then(data => {
          NotificationManager.success('Uspešno učitani podaci!');
          if (data) {
            this.setState({ 
              museums: data,
                 isLoading: false });
            }
        })
        .catch(response => {
            NotificationManager.error("Proverite konkeciju! Nije moguće prikupiti podatke!");
            this.setState({ submitted: false });
        });
    }

    getAllMuseums() {
      console.log(this.state);
      return this.state.museums.map(museum => {
          return <Card key={museum.id} className="card-content">
    <Card.Img variant="top" src="http://www.fashionela.net/wp-content/uploads/2014/12/Louvre-Museum-5.jpg" height="500"/>
    <Card.Body>
      <Card.Title>{museum.name}</Card.Title>
      <Card.Text>Adresa: {museum.address}, {museum.city}</Card.Text>
     <Card.Text>Email: {museum.email}</Card.Text>
      <Card.Text>Telefon: {museum.phone}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">ID Muzeja: {museum.id}</small>
    </Card.Footer>
  </Card>
                    
                      })
                    }
 
    render(){
      const museumDetails = this.getAllMuseums();
      const museums =<Container className= "container-cards"> {museumDetails} </Container>;
      return (
        
                  <CardGroup>
                  {museums}
                  </CardGroup>   
  
      );
  }
}

export default AllMuseums;