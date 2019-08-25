import React, {Component} from 'react';
import './ListaBeers.css';
import {Link} from "react-router-dom";
import {Box} from "grommet";

class ListaBeers extends Component {
  render() {

    let props = this.props;

    let listaElem = props.lista.map(b => {

      let pathToView = "/beer/" + b.id.toString();

      return <Box className="itemBeer" key={b.id} animation="fadeIn">

        <div className="panImg">
          <Link to={pathToView}>
            <img alt={b.name} src={b.image_url}/>
          </Link>
        </div>
        <div>
          <Link to={pathToView}>
            <h4>{b.name}</h4>
          </Link>
          <p>{b.tagline}</p>
          <p className="contributed">{b.contributed_by}</p>
        </div>

      </Box>


    });
    return (
        <div>
          {listaElem}
        </div>
    );
  }
}

export default ListaBeers;
