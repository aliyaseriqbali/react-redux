import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar'


const API_KEY = 'AIzaSyDUkHY0TGbqT0Js_2Anmjk-q0_lEplmfvg';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this HTML component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
