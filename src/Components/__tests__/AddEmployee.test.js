import React from 'react';
import { shallow } from 'enzyme';
import AddEmployee from '../AddEmployee';

describe('AddEmployee', () => {
    let mountedAdd;
    beforeEach(() => {
        mountedAdd = shallow(<AddEmployee />)
    })

    it('renders without crashing', () => {
        shallow(<AddEmployee />);
    });

    it('contains 5 inputs inside the form', () => {
        let inputs = mountedAdd.find('form').find('input');
        expect(inputs.length).toBe(5);
    });


});