import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import Home from './components/Home';
import Navbar from './components/Navbar';

describe("Rendering components", () => {
  it('renders App component without crashing', () => {
    shallow(<App/>)
  });
})
