import React, { Component } from 'react';
import axios from 'axios';
import AddEmployee from './AddEmployee';

class Table extends Component {
    constructor() {
        super();

        this.state = {
            employees: [],
            edit: false,
            new: true
        }

        this.getEmployees = this.getEmployees.bind(this);
    }


    getEmployees(list) {
        this.setState({
            employees: list,
            new: false
        });
    }

    async componentDidMount() {
        let res = await axios.get('/api/employees');
        this.setState({
            employees: res.data
        });
    }

    newEmployee() {

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
            <div>
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
                {this.state.new ? <AddEmployee cb={this.getEmployees} /> : ''}
            </div>
        )
    }
}

export default Table;