import React from 'react';
import DataService from "../servicios/DataService";
import ListaBeers from "./ListaBeers";
import InfiniteScroll from 'react-infinite-scroller';


class SeccionAllBeers extends React.Component {

  constructor(props) {
    super(props);


    this.isNoMounted = true;

    this.state = {
      pagina: 0,
      lista: [],
      totalItems: 0,
      totalPaginas: 0,
      hasMore: true
    };


    this.loadBeers.bind(this);
  }

  loadBeers(pagina) {

    let self = this;

    console.log(pagina);


    DataService.beers(pagina).then(respuesta => {

      let data = respuesta.data;

      let listaOld = [...self.state.lista];

      data.lista.forEach(b => {
        listaOld.push(b);
      });

      if (pagina >= data.totalPag) {
        self.setState({hasMore: false})
      }

      self.setState({
        pagina,
        lista: listaOld,
        totalPaginas:data.totalPag,
        totalItems:data.totalItems
      });

      return listaOld;
    });
  }


  render() {


    return <div className="row">

      <div className="seccion">
        <div className="col-12">
          <img src="../img/beers.png"/>
          <h1 className="tituloSeccion">All Beers ({this.state.lista.length}/{this.state.totalItems})</h1>

          <div className="wrapperIS">

            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadBeers.bind(this)}
                hasMore={this.state.hasMore}
                loader={<div key={0}>Loading ...</div>}
            >
              <ListaBeers lista={this.state.lista}/>
            </InfiniteScroll>
          </div>
        </div>
      </div>

    </div>;
  }
}

export default SeccionAllBeers;
