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
          NotificationManager.success('Successfuly fetched data');
          if (data) {
            this.setState({ 
              museums: data,
                 isLoading: false });
            }
        })
        .catch(response => {
            NotificationManager.error(response.message || response.statusText);
            this.setState({ submitted: false });
        });
    }

    getAllMuseums() {
      console.log(this.state);
      return this.state.museums.map(museum => {
          return <Card  variant= "top" key={museum.id}>
              <Card.Body>
                 <Container>
                    <Card.Text>Ime muzeja: {museum.name}</Card.Text>
                    <Card.Text>Adresa: {museum.address}, {museum.city}</Card.Text>
                    <Card.Text>Email: {museum.email}</Card.Text>
                    <Card.Text>Email: {museum.phone}</Card.Text>
                    </Container>
                    </Card.Body>
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