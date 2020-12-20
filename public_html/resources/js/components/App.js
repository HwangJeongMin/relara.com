import React, { Component } from 'react';
import MyForm from './my_form/MyForm';

class App extends Component {
  render() {
    return(
    <div className="border p-4 font-sans">
        <h1>App Work It !!!</h1>
        <MyForm />
    </div>
    );
  }
}

export default App;
