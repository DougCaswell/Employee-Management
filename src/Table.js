import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
    constructor() {
        super();

        this.state = {
            employees: []
        }
    }

    async componentDidMount() {
        let res = await axios.get('/api/employees');
        this.setState({
            employees: res.data
        });
    }

    render() {
        let mappedEmployees = <tr></tr>;
        if (this.state.employees[0]) {
            mappedEmployees = this.state.employees.map(employee => {
                return (
                    <tr key={employee.employee_id}>
                        <td>{employee.employee_id}</td>
                        <td>{employee.first_name}</td>
                        <td>{employee.last_name}</td>
                        <td>{employee.email_address}</td>
                        <td>{employee.phone_number}</td>
                    </tr>
                );
            });
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Employee Id Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {mappedEmployees}
                </tbody>
            </table>
        )
    }
}

export default Table;