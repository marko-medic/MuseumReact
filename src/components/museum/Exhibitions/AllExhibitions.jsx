import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { serviceConfig } from "../../../appSettings";
import { Container, Card, CardGroup, ListGroup,ListGroupItem, Row, Col} from 'react-bootstrap';

class AllExhibitions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        exhibitions: []
      };
    }

    componentDidMount() {
       this.getExhibitions();
    }

    getExhibitions() {
      const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };

      fetch(`${serviceConfig.baseURL}/api/Exhibition`, requestOptions)
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
                exhibitions: data,
                 isLoading: false });
            }
        })
        .catch(response => {
            NotificationManager.error(response.message || response.statusText);
            this.setState({ submitted: false });
        });
    }

    getAllExhibitions() {
      console.log(this.state);
      return this.state.exhibitions.map(exhibition => {
          return <CardGroup className="card-group-stil"><Card key={exhibition.id}>
          <Card.Img variant="top" src={exhibition.image} style={{ height: '400px'}}/>
          <Card.Body className="card-exception">
            <Card.Title>{exhibition.name}</Card.Title>
            <Card.Text>
             {exhibition.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Vreme: {exhibition.opening}</ListGroupItem>
            <ListGroupItem>Izlozbena prostorija: {exhibition.auditoriumName}</ListGroupItem>
          </ListGroup>
          <Card.Footer>
          <a className="text-muted"href="http://www.narodnimuzej.rs/stalna-postavka/"> Pogledajte stalne postavke </a>
          </Card.Footer>
        </Card>
        </CardGroup> 
                      })
                  }
 
    render(){
      const exhibitionDetails = this.getAllExhibitions();
      const exhibition =<Container className= "container-cards"> {exhibitionDetails} </Container>;
      return (
        <div>
        <div className="heading" >Izlozbe i stalne postavke muzeja</div>
        <div className="text-home"> <br></br>Izlozbe i stalne postavke muzeja obuhvataju ogromni hronološki opseg od dalekog paleolita sve do umetnosti 20. veka. Organizovana na tri nivoa reprezentativnog zdanja, postavka je raspoređena na 5000m² izložbenog prostora. Predstavljajući čitav fond Narodnog muzeja, pažljivo odabrani eksponati, kao i postavka u celini svedoči o izuzetnim arheološkim istraživanjima, predvođenim stručnjacima Narodnog muzeja, o vidovima reprezentacije srpskih vladara kroz umetničke predmete, o poklonodavcima i kolekcionarima, slikovito i hronološki, a istovremeno nelinearno i pravolinijski, vodiće posetioca od praistorije do savremene umetnosti.<br></br>
Polazište u osmišljavanju nove muzejske postavke, u čemu su učestvovali kustosi Narodnog muzeja i dizajneri Jelena Stefanović, Igor i Irena Stepančić,  bilo je nastojanje da se uravnoteženim kombinovanjem konvencionalnog i inovativnog, omogući otvoreni uvid u umetnost i prošlost. Ponovnim otvaranjem, osnaženih kapaciteta, Narodni muzej stremi da bude aktivna i savremena ustanova koju istovremeno odlikuju i tradicionalnosti i otvorenost i fleksibilnost. Nastojali smo da postavka bude jasno čitljiva i razumljiva posetiocima, sa svešću da je Narodni muzej jedno od retkih mesta gde je moguće ostvariti neposredan kontakt sa kulturnim dobrima – dobrima koja u sebi nose različite vrednosti od istorijskih, kulturnih, preko estetskih i naučnih, sve do ekonomskih i simboličnih.
<br></br>
Kroz samu stalnu postavku se prepliću rezultati svih muzejskih delatnosti i aktivnosti, od istraživanja i konzervacije do interpretacije i edukacije. Narodni muzej je živ organizam, pulsirajući centar koji u velikoj meri čine upravo ljudi koji u njemu rade i koji su njemu nekada radili.
<br></br>
Sa željom da Muzej bude što pristupačniji za sve posetioce, nastojali smo da uz vizuelni sklad i prateći materijal u vidu tekstova, legendi i digitalnih sadržaja omogućimo, najpre prijatan boravak u muzeju, ali i priliku za otkrivanje, saznanje, učenje i uživanje.
</div>
<br></br>
<div className="heading" >Izloze koje slede:</div>
                  <CardGroup>
                  {exhibition}
                  </CardGroup>
    </div>
  
      );
  }
}

export default AllExhibitions;