import React, { Component } from 'react';

class Table extends Component {
    render() {
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
                    <tr>
                        <td>1</td>
                        <td>Doug</td>
                        <td>Caswell</td>
                        <td>dougcaswell@gmail.com</td>
                        <td>(903)244-1402</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Marvin</td>
                        <td>Robot</td>
                        <td>b.t.s.o.a.p.@email.com</td>
                        <td>(123)456-7890</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mys</td>
                        <td>Terry</td>
                        <td>unknown@nearby.com</td>
                        <td>(098)765-4321</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;