import React, { Component } from 'react';
import NavigationMenu from './layouts/NavigationMenu';
import MyForm from './my_form/MyForm';

class App extends Component {
  render() {
    return(
        <div>
            <header>
                <NavigationMenu />
            </header>

            <main>
                <MyForm />
            </main>
        </div>
    );
  }
}

export default App;
