import React from 'react';

const EmployeeTable = (props) => {
    const { editableIndex, employeeList, removeEmployee, editEmployee } = props;
    console.log(editableIndex);
    const pointerEvents = editableIndex ? "none" : "auto";
    console.log(pointerEvents);
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
            <tbody style={{ pointerEvents: pointerEvents }} >
                {employeeListHandler}
            </tbody>
        </table>
    )

}

// class EmployeeTable extends Component {

//     // state = {
//     //     pointerEvents: 'auto'
//     // }

//     render() {

//         // const tablePointerEvent = () => {
//         //     if (this.props.editableIndex > 0 || this.props.editableIndex !== "") {
//         //         this.setState({
//         //             pointerEvents: "none"
//         //         })
//         //     }
//         //     else {
//         //         this.setState({
//         //             pointerEvents: "auto"
//         //         })
//         //     }
//         // }

//         // console.log(tablePointerEvent);

//         const employeeListHandler = this.props.employeeList.map(employee => {
//             return (
//                 <tr key={employee.id} >
//                     <td>{employee.id}</td>
//                     <td>{employee.firstName}</td>
//                     <td>{employee.lastName}</td>
//                     <td>{employee.email}</td>
//                     <td>
//                         <button onClick={() => { this.props.editEmployee(employee.id) }} >Edit</button>
//                         <button onClick={() => { this.props.removeEmployee(employee.id) }} >Delete</button>
//                     </td>
//                 </tr>
//             )
//         });



//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Serial No:</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Email ID</th>
//                         <th>Option</th>
//                     </tr>
//                 </thead>
//                 <tbody style={{pointerEvents: this.props.pointerEvent}}>
//                     {employeeListHandler}
//                 </tbody>
//             </table >
//         )

//     }

// }


export default EmployeeTable;
