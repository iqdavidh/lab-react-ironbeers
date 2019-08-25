import React from 'react';
import DataService from "../servicios/DataService";
import ListaBeers from "./ListaBeers";

async function getPagina(pagina) {


  let respuesta = await DataService.beers(pagina);


  return respuesta.data.lista;

}


class SeccionAllBeers extends React.Component {

  constructor(props) {
    super(props)


    this.state = {
      pagina: 1,
      lista: []
    };



  }

  componentDidMount(){
    getPagina(1).then(lista => {
      this.setState({
        lista
      })
    });
  }


  render() {

    return <div className="row">

      <div className="seccion">
        <div className="col-12">
          <img src="../img/beers.png"/>
          <h1 className="tituloSeccion">All Beers</h1>

          <ListaBeers lista={this.state.lista}/>
        </div>
      </div>

    </div>;
  }
}

export default SeccionAllBeers;
