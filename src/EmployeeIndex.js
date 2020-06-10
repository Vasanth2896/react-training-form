import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm'

class EmployeeIndex extends Component {

    formValidation = () => {
        const emailReg = /^([a-z A-Z 0-9 _\.\-])+\@(([a-z A-Z 0-9\-])+\.)+([a-z A-z 0-9]{3,3})+$/
        let employeeList = this.state.editableIndex ? this.state.employeeList.filter(employee => employee.id !== this.state.editableIndex) : this.state.employeeList;
        const emailFlag = employeeList.some(employee => employee.email === this.state.employee.email);

        if (emailFlag) {
            alert("Duplicate email ID");
            return false;
        }

        if (!this.state.employee.firstName) {
            alert("firstName is empty");
            return false;
        }

        if (!this.state.employee.lastName) {
            alert("lastName is empty");
            return false;
        }

        if (!emailReg.test(this.state.employee.email) || !this.state.employee.email) {
            alert("invalid email ID");
            return false;
        }

        return true;
    }

    state = {
        employeeList: [
            { id: 1, firstName: "Vasanth", lastName: "Nayak", email: "vnayak@2896.com" },
        ],
        employee: {
            firstName: "",
            lastName: "",
            email: "",
        },
        editableIndex: "",
        // pointerEvent: "auto"
    }

    handleChange = (e) => {
        const employee = { ...this.state.employee };
        employee[e.target.name] = e.target.value;
        this.setState({ employee });
    }

    cancelOperation = (e) => {
        e.preventDefault();
        const employee = {
            firstName: "",
            lastName: "",
            email: ""
        }
        this.setState({ employee, editableIndex: "" });
    }

    addEmployee = (e) => {
        e.preventDefault();

        if (this.formValidation()) {
            let employeeList = [];
            if (!this.state.editableIndex) {
                employeeList = [...this.state.employeeList, { id: this.state.employeeList.length + 1, ...this.state.employee }];
            }
            else {
                employeeList = [...this.state.employeeList];
                const employee = { ...this.state.employee }
                employeeList.splice(this.state.editableIndex - 1, 1, employee);
            }
            const employee = {
                firstName: "",
                lastName: "",
                email: "",
            }
            this.setState({ employeeList, employee, editableIndex: "" });
        }
    }

    editEmployee = (id) => {
        const onEmployeeEdit = this.state.employeeList.find(employee => { return id === employee.id }); // marke
        this.setState({
            employee: { ...onEmployeeEdit }, editableIndex: id
        });
    }

    removeEmployee = (id) => {
        const employeeList = this.state.employeeList.filter(employee => { return employee.id !== id });
        this.setState({ employeeList });
    }

    render() {
        return (
            <div className="EmployeeTable">
                <h1>EmployeeList</h1>
                <EmployeeForm handleChange={this.handleChange} addEmployee={this.addEmployee} cancelOperation={this.cancelOperation} employee={this.state.employee} />
                <EmployeeTable employeeList={this.state.employeeList} removeEmployee={this.removeEmployee} editEmployee={this.editEmployee} editableIndex={this.state.editableIndex} pointerEvents={this.state.pointerEvent} />
            </div>
        );
    }

}

export default EmployeeIndex;

