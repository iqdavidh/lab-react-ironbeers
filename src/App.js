import React from 'react';
import './App.css';
import {Box, Grid, Grommet, Menu} from 'grommet';
import SeccionAllBeers from "./components/SeccionAllBeers";
import SeccionNewBeer from "./components/SeccionNewBeer";
import SeccionRandomBeer from "./components/SeccionRandomBeer";



function App() {
  return (


      <div>

        <Box gridArea="header" background="brand">
          <Menu
              label="Menu"
              items={[
                {
                  label: 'All Beers', onClick: () => {
                  }
                },
                {
                  label: 'Random Beer', onClick: () => {
                  }
                },
                {
                  label: 'New Beer', onClick: () => {
                  }
                },
              ]}
          />
        </Box>
        <div className="row">
          <div className="col-4">
            <SeccionAllBeers />
          </div>
          <div className="col-4">
            <SeccionNewBeer className="seccion"/>
          </div>
          <div className="col-4">
            <SeccionRandomBeer className="seccion"/>
          </div>

        </div>


      </div>


  );
}

export default App;
