import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from './utils';
import React from 'react';
import initTestStore from "./store/initTestStore";

const setUp = (initialState= initTestStore) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
};

describe('App Component with Provider react-redux', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setUp(initTestStore);
  });

  describe("Rendering components", () => {
    it('renders App component without crashing', () => {
      shallow(<App/>)
    });
  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'abcd');
    expect(component.length).toBe(1);
  });
  })
});
