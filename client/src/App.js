import React from 'react';

//import {useData} from './hooks/useApiData';

import axios from 'axios';
import { Grid } from 'semantic-ui-react'
import PlayerHeader from './components/playerHeader';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      players: [],
      error: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => this.setState({players: res.data}))
      .catch(err => this.setState({error: err}))
  }

  countryFlag = (flag) => {
    return (`https://www.countryflags.io/${flag.toLowerCase()}/flat/24.png`)
  }

  render() {
    return(
      <>
        <PlayerHeader />
        <Grid container className="App">
          <Grid.Row>
            {
              this.state.players.map((player, index) => (
                <Grid.Column width={8} key={index} style={{fontSize: '1.25rem'}} data-testid={player.country}>
                  <img src={this.countryFlag(player.code)} />
                  ({player.searches}) {player.name} {player.country}
                </Grid.Column>
              )
            )
            }
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

export default App;