import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the Table component', () => {
    let mountedApp = shallow(<App />);
    const Table = mountedApp.find('Table');
    expect(Table.length).toBe(1);
  });
});
