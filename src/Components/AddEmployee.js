import React, { Component } from 'react';
import axios from 'axios';

class AddEmployee extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
    }

    async add() {
        let newEmployee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone
        }
        let res = await axios.post('/api/new', newEmployee);
        this.props.cb(res.data);
    }

    render() {
        return (
            <div>
                <h2>Add new employee to system</h2>
                <form onSubmit={() => this.add()}>
                    <div className="left">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" onChange={e => this.setState({ firstName: e.target.value })} name="firstName" id="firstName" required />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" onChange={e => this.setState({ lastName: e.target.value })} name="lastName" id="lastName" required />
                    </div>
                    <div className="right">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={e => this.setState({ email: e.target.value })} name="email" id="email" required />
                        <label htmlFor="phone">Phone</label>
                        <input type="text" onChange={e => this.setState({ phone: e.target.value })} name="phone" id="phone" required />
                    </div>
                    <div className="submit">
                        <input type="submit" value="Hired!" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddEmployee;