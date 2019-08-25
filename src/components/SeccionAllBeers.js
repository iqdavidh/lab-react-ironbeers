import React from 'react';


class SeccionAllBeers extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div className="seccion">
      <img src="../img/beers.png"/>
      <h1>All Beers</h1>
    </div>;
  }
}

export default SeccionAllBeers;
