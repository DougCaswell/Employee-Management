import React, { Component } from 'react';
import axios from 'axios';
import AddEmployee from './AddEmployee';

class Table extends Component {
    constructor() {
        super();

        this.state = {
            employees: [],
            editId: -1,
            new: true,
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }

        this.getEmployees = this.getEmployees.bind(this);
    }


    getEmployees(list) {
        this.setState({
            employees: list,
            new: false
        });
    }

    async fireEmployee(id) {
        console.log(id);
        let res = await axios.delete(`/api/fire/${id}`);
        this.setState({
            employees: res.data
        })
    }

    toggleEdit(employee) {
        this.setState({
            editId: employee.employee_id,
            firstName: employee.first_name,
            lastName: employee.last_name,
            email: employee.email_address,
            phone: employee.phone_number
        })
    }

    async saveEmployee() {
        let update = {
            editId: this.state.editId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone
        }
        let res = await axios.put('/api/edit', update);
        this.setState({
            employees: res.data,
            editId: -1,
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        })
    }

    async componentDidMount() {
        let res = await axios.get('/api/employees');
        this.setState({
            employees: res.data
        });
    }



    mapEmployees() {

        //if there are employees in state ...
        if (this.state.employees[0]) {
            return this.state.employees.map(employee => {
                //if this employee is being edited ...
                if (employee.employee_id === this.state.editId) {
                    return (
                        <tr key={employee.employee_id}>
                            <td>{employee.employee_id}</td>
                            <td><input type='text' value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} /></td>
                            <td><input type='text' value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} /></td>
                            <td><input type='email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /></td>
                            <td><input type='text' value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} /></td>
                            <td>
                                <input type='button' value='Save' onClick={() => this.saveEmployee()} />
                            </td>
                        </tr>
                    );
                } else {
                    //if this employee is not being edited ...
                    return (
                        <tr key={employee.employee_id}>
                            <td>{employee.employee_id}</td>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email_address}</td>
                            <td>{employee.phone_number}</td>
                            <td>
                                <input type='button' onClick={() => this.toggleEdit(employee)} value='Edit' />
                            </td>
                            <td>
                                <input type='button' onClick={() => this.fireEmployee(employee.employee_id)} value='Fire!' />
                            </td>
                        </tr>
                    );
                }
            });
        } else {
            //if there are no employees ...
            return <tr><td>Loading ...</td></tr>
        }
    }

    render() {


        return (
            <div className='TableWrapper'>
                <div>
                    <h1>Employee Management App</h1>
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
                            {this.mapEmployees()}
                        </tbody>
                    </table>
                </div>
                {this.state.new ? <AddEmployee cb={this.getEmployees} /> : ''}
            </div>
        )
    }
}

export default Table;