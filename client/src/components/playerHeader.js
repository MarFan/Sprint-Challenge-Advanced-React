import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

import { useDarkMode } from '../hooks/useDarkMode'

class PlayerHeader extends React.Component {
    state = {
        darkMode: false
    }

    handleClick = () => {        
        this.setState((prevState) => ({darkMode: !prevState.darkMode}));

        if(this.state.darkMode){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        } 
    }

    render() {
        const { active } = this.state;
        return (
            <Menu borderless inverted style={{borderRadius: 0}} data-testid="menu">
                <Menu.Item header>Players</Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button.Group>
                            <Button color="grey" onClick={this.handleClick}>Light</Button>
                            <Button.Or />
                            <Button color="black" onClick={this.handleClick}>Dark</Button>
                        </Button.Group>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default PlayerHeader;