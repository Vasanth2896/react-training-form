import React from 'react';

const EmployeeTable = ({ employeeList, removeEmployee, editEmployee }) => {

    const employeeListHandler = employeeList.map(employee => {
        return (
            <tr key={employee.id} >
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                    <button onClick={() => { editEmployee(employee.id) }} >Edit</button>
                    <button onClick={() => { removeEmployee(employee.id) }} >Delete</button>
                </td>
            </tr>
        )
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Serial No:</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody id="employeeList">
                {employeeListHandler}
            </tbody>
        </table>
    )

}

export default EmployeeTable;
