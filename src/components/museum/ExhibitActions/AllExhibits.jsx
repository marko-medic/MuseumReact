import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { serviceConfig } from "../../../appSettings";
import { Container, Card, CardGroup} from 'react-bootstrap';

class AllExhibits extends Component {
    constructor(props) {
      super(props);
      this.state = {
        exhibits: []
      };
    }

    componentDidMount() {
       this.getExhibits();
    }

    getExhibits() {
      const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };

      fetch(`${serviceConfig.baseURL}/api/Exhabit`, requestOptions)
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
                exhibits: data,
                 isLoading: false });
            }
        })
        .catch(response => {
            NotificationManager.error("Proverite konkeciju! Nije moguće prikupiti podatke!");
            this.setState({ submitted: false });
        });
    }

    getAllExhibits() {
      console.log(this.state);
      return this.state.exhibits.map(exhibit => {
          return <Card className="bg-dark text-white adding-padding">
          <Card.Img src={exhibit.picture} />
          <Card.ImgOverlay>
            <Card.Title>{exhibit.name}</Card.Title>
            <Card.Text>
              Eksponat je iz {exhibit.year}. godine.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
                    
                      })
                    }
 
    render(){
      const exhibitsDetails = this.getAllExhibits();
      const exhibits =<Container className= "container-cards"> {exhibitsDetails} </Container>;
      return (<div>
        <div className="heading" >Eksponati</div><br></br>
                  <CardGroup>
                  {exhibits}
                  </CardGroup> </div>  
  
      );
  }
}

export default AllExhibits;
