/**
* The Styles and resources
*/
import 'resources/css/main.css';
/**
* React / Redux Modules
*/
import React from 'react';
import {render} from 'react-dom';
import store from 'redux/store';
import {Provider} from 'react-redux';
/**
* All Components
*/
import Album from 'containers/album/Album.Component';
/**
* The App class
*/
class App extends React.Component {
  /**
  * The constructor
  */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
  * The renderer
  */
  render() {
    return (
      <Provider store={store}>
        <Album/>
      </Provider>
    );
  }
}
/**
* Render the app
*/
render( <App/>, document.getElementById('root'));
