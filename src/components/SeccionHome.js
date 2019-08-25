import React from 'react';
import {NavLink} from "react-router-dom";


class SeccionHome extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div className="row ">

          <div className="col-4 ">
            <div className="seccion">

              <NavLink to="/all">
                <img src="img/beers.png"/>
                <h2>All Beers</h2>
              </NavLink>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra libero nec metus imperdiet
                tempor.
                Curabitur maximus dapibus pellentesque. Duis id tortor condimentum, ultricies nisi eu, viverra augue. Donec
                gravida a orci non elementum. Aliquam sit amet sodales dolor. Vivamus a nibh nisi. Nam in libero blandit,
                auctor ligula at, commodo nulla. Sed aliquam velit a feugiat ultricies. Vivamus elementum, augue non
                interdum
                auctor, nibh massa molestie sem, at accumsan diam lacus aliquet leo.</p>


            </div>
          </div>
          <div className="col-4 ">
            <div className="seccion">

              <NavLink to="/random">
                <img src="img/random-beer.png"/>
                <h2>Random Beers</h2>
              </NavLink>

              <p>nterdum et malesuada fames ac ante ipsum primis in faucibus. Quisque condimentum odio dolor, ac pharetra
                nunc
                finibus vitae. Duis pharetra nisi vitae ipsum facilisis molestie. Nunc facilisis elit ut nisi dictum, sit
                amet
                facilisis ipsum auctor. Praesent nec magna vitae magna euismod vulputate. Mauris eget ullamcorper nibh, a
                blandit nunc. Sed aliquam, nunc eget facilisis vulputate, massa magna tincidunt nisl, at u</p>

            </div>
          </div>
          <div className="col-4 ">
            <div className="seccion">

              <NavLink to="/new">
                <img src="img/new-beer.png"/>
                <h2>New Beer</h2>
              </NavLink>

              <p>Etiam ultricies porttitor faucibus. Fusce porttitor ut justo sit amet cursus. Donec iaculis risus sem.
                Mauris
                vel metus ac odio vestibulum scelerisque at vel magna. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Donec non posuere est. Vivamus eget dui ac quam faucibus laoreet nec sed lorem. </p>
            </div>
          </div>

        </div>


  }
}

export default SeccionHome;
