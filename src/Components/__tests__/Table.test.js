import React from 'react';
import { shallow } from 'enzyme';
import Table from '../Table';
import axios from 'axios';

describe('Table', () => {
    let mountedTable;

    beforeEach(() => {
        mountedTable = shallow(<Table />);
    });

    it('renders without crashing', () => {
        shallow(<Table />);
    });

    it('renders a table element', () => {
        let table = mountedTable.find('table');
        expect(table.length).toBe(1);
    });

    it('table is setup properly', () => {
        let table = mountedTable.find('table');
        let tableHeadRow = table.find('thead').find('tr');

        expect(tableHeadRow.length).toBe(1);

        let headings = tableHeadRow.find('th');

        expect(headings.length).toBe(5);

        let employees = table.find('tbody').find('tr');

        expect(employees.length).toBeGreaterThanOrEqual(1);
    });

    it('has employee array on state', async () => {
        let instance = mountedTable.instance()
        expect(instance.state).toHaveProperty('employees', []);
    })

    // it('calls axios.get with correct url', () => {
    //     return mountedTable.instance().componentDidMount().then(() => {
    //         expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
    //     });
    // })

    // it('updates state with api data', () => {
    //     return mountedTable.instance().componentDidMount().then(() => {
    //         expect(mountedTable.state()).toHaveProperty('shops', [
    //             {
    //                 "location": "test location",
    //                 "address": "123 Portland Dr"
    //             }
    //         ]);
    //     });
    // })

});
