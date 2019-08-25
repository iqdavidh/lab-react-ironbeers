import React from 'react';
import './App.css';
import {Box, Menu} from 'grommet';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import SeccionHome from "./components/SeccionHome";
import SeccionAllBeers from "./components/SeccionAllBeers";
import SeccionNewBeer from "./components/SeccionNewBeer";
import SeccionRandomBeer from "./components/SeccionRandomBeer";
import SeccionBeer from "./components/SeccionBeer";

import {Grommet} from 'grommet';

const myTheme = {
  global: {
    pad:"small"
  }
};


function App(props) {


  return (


      <Grommet theme={myTheme}>

        <div className="container">

          <BrowserRouter>

            <Box gridArea="header" background="brand">
              <Menu
                  label="Iron Beers"
                  items={[
                    {
                      label: 'Home', href: "/"
                    },
                    {
                      label: 'All Beers', href: "/all"
                    },
                    {
                      label: 'Random Beer', href: "/random"
                    },
                    {
                      label: 'New Beer', href: "/new"
                    },
                  ]
                  }
              />
            </Box>
            <Switch>
              <Route path="/" component={SeccionHome} exact/>
              <Route path="/all" component={SeccionAllBeers} exact/>
              <Route path="/new" component={SeccionNewBeer} exact/>
              <Route path="/random" component={SeccionRandomBeer} exact/>
              <Route path="/beer/:id" component={SeccionBeer} exact/>
            </Switch>


          </BrowserRouter>

        </div>
      </Grommet>

  )
      ;
}

export default App;
