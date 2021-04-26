import React from 'react';
import ReactDOM from 'react-dom';
import Displayappcard from './Displayappcard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Displayappcard />, div);
  ReactDOM.unmountComponentAtNode(div);
});