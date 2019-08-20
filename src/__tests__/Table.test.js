import React from 'react';
import { shallow } from 'enzyme';
import Table from '../Table';

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

});
