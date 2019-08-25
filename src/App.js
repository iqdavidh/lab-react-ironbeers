import React from 'react';
import './App.css';
import {Box, Menu} from 'grommet';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import SeccionHome from "./components/SeccionHome";


function App(props) {
  return (


      <BrowserRouter>


        <Box gridArea="header" background="brand">
          <Menu
              label="Iron Beers"
              items={[
                {
                  label: 'Home', href: "/"
                },
                {
                  label: 'All Beers', href: "/"
                },
                {
                  label: 'Random Beer', href: "/"
                },
                {
                  label: 'New Beer', href: "/"
                },
              ]
              }
          />
        </Box>
        <Switch>
          <Route path="/" component={SeccionHome}/>
        </Switch>
        <p>sdfas</p>


      </BrowserRouter>


  );
}

export default App;
