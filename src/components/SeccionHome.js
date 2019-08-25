import React from 'react';
import SeccionNewBeer from "./SeccionNewBeer";
import SeccionRandomBeer from "./SeccionRandomBeer";
import SeccionAllBeers from "./SeccionAllBeers";


class SeccionHome extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div className="row">

aaaaaaaaaaaa
      <div className="col-4">
        <SeccionAllBeers />
      </div>
      <div className="col-4">
        <SeccionNewBeer className="seccion"/>
      </div>
      <div className="col-4">
        <SeccionRandomBeer className="seccion"/>
      </div>


    </div>;
  }
}

export default SeccionHome;
