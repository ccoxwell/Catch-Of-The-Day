// let's go!
import React                          from 'react';
import { render }                     from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
//can break out css to separate files and scope files to specific components
//.styl files? 

import StorePicker  from './components/StorePicker';
import App          from './components/App';
import NotFound     from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker}></Match>
        <Match pattern="/store/:storeId" component={App}></Match>
        <Miss component={NotFound}></Miss>
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#main"))