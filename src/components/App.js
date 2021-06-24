import React, { Component } from 'react';
import { Dropdown, Option } from './Dropdown/Dropdown';
import Dropdown2 from './Dropdown/Dropdown2';

class App extends Component {



    render() {
        return(
            <div>
                React App
                <Dropdown 
                    formLabel="Choose a service"
                    buttonText="Send Form"
                    action="/"
                >
                    <Option value="Black" />
                    <Option value="White" />
                    <Option value="Navy" />
                </Dropdown>
                <Dropdown2
                    title="Select location"
                />
                <div>This is another text box</div>
                <p>Lorem ipsundflkjsd fklsdjflksdjf lkdsjflksdjf lksdjflkdsjflds fkldsjfldskjf lkdsjfldskjflkdsfj dskfj dskljf dsfjds flsd fsd fsj fl sdlfjdsljf lsdjfksdjfewoijfoiwe jf  sfjdslkfs </p>
            </div>
        );
    }
}

export default App;