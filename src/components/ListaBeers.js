import React, {Component} from 'react';

class ListaBeers extends Component {
  render() {

    let props=this.props;

    let listaElem=props.lista.map( b=>{
      return <div className="itemBeer">
        {JSON.stringify(b)}
      </div>
    });
    return (
        <div>
          {listaElem}
        </div>
    );
  }
}

export default ListaBeers;
