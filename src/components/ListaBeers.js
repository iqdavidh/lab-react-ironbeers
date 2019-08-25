import React, {Component} from 'react';
import './ListaBeers.css';

class ListaBeers extends Component {
  render() {

    let props=this.props;

    let listaElem=props.lista.map( b=>{
      return <div className="itemBeer" key={b.name}>

        <div className="panImg">
          <img alt={b.name} src={b.image_url}/>
        </div>
        <div>
          <h4>{b.name}</h4>
          <p>{b.tagline}</p>
          <p className="contributed" >{b.contributed_by}</p>

        </div>

      </div>
    });
    return (
        <div >
          {listaElem}
        </div>
    );
  }
}

export default ListaBeers;
