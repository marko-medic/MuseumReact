import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { serviceConfig } from "../../../appSettings";
import { Container, Card, CardGroup, Button,ResponsiveEmbed, CardDeck} from 'react-bootstrap';

class AllAuditoriums extends Component {
    constructor(props) {
      super(props);
      this.state = {
        auditoriums: []
      };
    }

    componentDidMount() {
       this.getAuditoriums();
    }

    getAuditoriums() {
      const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };

      fetch(`${serviceConfig.baseURL}/api/Auditoriums`, requestOptions)
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
                auditoriums: data,
                 isLoading: false });
            }
        })
        .catch(response => {
            NotificationManager.error("Proverite konkeciju! Nije moguće prikupiti podatke!");
            this.setState({ submitted: false });
        });
    }

    getAllAuditoriums() {
      console.log(this.state);
      return this.state.auditoriums.map(auditorium => {
          return <Card key={auditorium.id} className="card-content">
    <Card.Img variant="top" src="https://rs.n1info.com/wp-content/uploads/2020/11/muzej-jugoslavije-346472.jpeg" height="500"/>
    <Card.Body>
      <Card.Title>{auditorium.name}</Card.Title>
      <Card.Text><b>Cena iznajmljivanja izlozbene sale:</b></Card.Text>
     <Card.Text>Izložbena sala: Za izložbe u trajanju od 10 dana cena je 50.000,00 dinara.<br></br> Za skupove prvi sat 4.000,00 dinara,a svaki naredni 5.000,00 dinara.<br></br> Za modne revije, snimanje spota i sl. 30.000,00 dinara u trajanju od 5 dana.</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">ID Muzeja: {auditorium.museumId}</small>
    </Card.Footer>
  </Card>
                    
                      })
                    }
 
    render(){
      const auditoriumDetails = this.getAllAuditoriums();
      const auditoriums =<Container className= "container-cards"> {auditoriumDetails} </Container>;
      return (
        
                  <CardGroup>
                  {auditoriums}
                  </CardGroup>   
  
      );
  }
}

export default AllAuditoriums;