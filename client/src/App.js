import React from 'react';

import {useData} from './hooks/useApiData';

import { Grid } from 'semantic-ui-react'

import PlayerHeader from './components/playerHeader';

function App() {
  const [response, error] = useData('http://localhost:5000/api/players', [])
   
  const countryFlag = (flag) => {
    return (`https://www.countryflags.io/${flag.toLowerCase()}/flat/24.png`)
  }

  return (
    <>
    <PlayerHeader />
    <Grid container className="App">
      <Grid.Row>
        {
          response.map((player, index) => (
            <Grid.Column width={8} key={index} style={{fontSize: '1.25rem'}} data-testid={player.country}>
              <img src={countryFlag(player.code)} />
               ({player.searches}) {player.name} {player.country}
            </Grid.Column>
          )
        )
        }
      </Grid.Row>
    </Grid>
    </>
  );
}

export default App;
