import React, {Component} from 'react';
import DataService from "../servicios/DataService";

import {Box} from "grommet/es6";

class SeccionRandomBeer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      beer:null,
      id:null
    }
  }

  componentDidMount() {

    DataService.beerRandom()
        .then(respuesta => {

          this.setState({
            beer:respuesta.data.beer,
            id:respuesta.data.id
          })
        });
  }

  render() {

    if(this.state.id===null){
      return <div>Loading</div>
    }

    let b = this.state.beer;

    return (
        <Box className="beerFull" animation="fadeIn" pad="small">
          <div className="panImg">
            <img src={b.image_url} alt={b.name}/>
          </div>
          <h4>{b.name}</h4>
          <p className="tagLine">{b.tagline}</p>
          <p>{b.description}</p>
          <p>ID: {this.state.beer.id}</p>
        </Box>
    );
  }
}

export default SeccionRandomBeer;
