import React from 'react';
import './App.css';
import {Box, Grid, Grommet, Menu} from 'grommet';
import SeccionAllBeers from "./components/SeccionAllBeers";
import SeccionNewBeer from "./components/SeccionNewBeer";
import SeccionRandomBeer from "./components/SeccionRandomBeer";

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

function App() {
  return (
      <Grommet plain>


        <Grid
            rows={['xxsmall', 'xsmall']}
            columns={['xsmall', 'small']}
            gap="small"
            areas={[
              {name: 'header', start: [0, 0], end: [1, 0]},
              {name: 'allbeer', start: [0, 1], end: [ 1,0]},
              {name: 'newBeer', start: [1, 1], end: [1, 1]},
              {name: 'randombeer', start: [1, 1], end: [1, 1]},
            ]}
        >
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

          <Box gridArea="allbeer" background="light-2">
            <SeccionAllBeers/>
          </Box>
          <Box gridArea="newBeer" background="light-2">
            <SeccionNewBeer/>
          </Box>

          <Box gridArea="randombeer" background="light-2">
            <SeccionRandomBeer/>
          </Box>

        </Grid>






      </Grommet>
  );
}

export default App;
