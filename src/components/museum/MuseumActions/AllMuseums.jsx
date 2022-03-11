import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { serviceConfig } from "../../../appSettings";
import { Container, Card, CardGroup, Button} from 'react-bootstrap';


class AllMuseums extends Component {
    constructor(props) {
      super(props);
      this.state = {
        museums: [],
        redirect: false
      };
      this.removeMuseum = this.removeMuseum.bind(this);
      this.editMuseum = this.editMuseum.bind(this);
    }

    componentDidMount() {
      this.getMuseums();
   }

   editMuseum(id){
    this.props.history.push(`editmuseum/${id}`);

  }

    removeMuseum(id) {
      const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
       
    };

    fetch(`${serviceConfig.baseURL}/api/Museums/${id}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response);
            }
            return response.statusText;
        })
        .then(result => {
            NotificationManager.success("Uspesno obrisan muzej ciji je ID: "+ id);
            const newState = this.state.museums.filter(museum => {
                return museum.id !== id;
            })
            window.location.reload();
        })
        .catch(response => {
            NotificationManager.error("Nije moguce obrisati muzej");
            this.setState({ submitted: false });
        });
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
      <br></br>
 <Button variant="dark"  width = "1%" className="text-center cursor-pointer btn-style" 
 onClick={() => this.editMuseum(museum.id)} > Izmeni muzej</Button>

 <Button variant="dark"  width = "1%" className="text-center cursor-pointer btn-style" onClick={() => this.removeMuseum(museum.id)} > Obrisi muzej</Button>
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