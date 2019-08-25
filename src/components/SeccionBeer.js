import React, {Component} from 'react';
import DataService from "../servicios/DataService";
import {Box} from "grommet";

class SeccionBeer extends Component {

  constructor(props) {
    super(props);

    let id=props.match.params.id;
    console.log(props.match);

    this.state = {
      id:parseInt(id),
      beer: null
    }
  }

  componentDidMount() {

    DataService.beerFromId(this.state.id)
        .then(respuesta => {

          this.setState({
            beer:respuesta.data.beer
          })
        });
  }

  render() {
    let id = this.state.id;

    if (this.state.beer === null) {
      return <div>Loading...</div>
    }

    let b = this.state.beer;

    return (
        <Box className="beerFull">
          <div className="panImg">
            <img src={b.image_url} alt={b.name}/>
          </div>
          <h4>{b.name}</h4>
          <p className="tagLine">{b.tagline}</p>
          <p>{b.description}</p>
        </Box>
    );
  }
}

export default SeccionBeer;
