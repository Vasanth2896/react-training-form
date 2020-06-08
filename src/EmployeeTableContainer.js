import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable'
import AddEmployeeForm from './AddEmployeeForm'

class EmployeeTableContainer extends Component {

    formValidation = () => {
        const emailReg = /^([a-z A-Z 0-9 _\.\-])+\@(([a-z A-Z 0-9\-])+\.)+([a-z A-z 0-9]{3,3})+$/

        if (this.state.firstName === "") {
            alert("firstName is empty");
            return false;
        }

        if (this.state.lastName === "") {
            alert("lastName is empty");
            return false;
        }

        if (!emailReg.test(this.state.email) || this.state.email === "") {
            alert("invalid email ID");
            return false;
        }

        return true;
    }

    state = {
        employeeList: [
            { id: 1, firstName: "Vasanth", lastName: "Nayak", email: "vnayak@2896.com" },
        ],
        firstName: "",
        lastName: "",
        email: "",
        editable: false,
        editableIndex: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addEmployee = (e) => {
        e.preventDefault();
        let isValid = this.formValidation();
        if (isValid) {
            if (!this.state.editable) {
                const employeeList = [...this.state.employeeList, { id: Math.random(), firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email }];
                this.setState({ employeeList, firstName: "", lastName: "", email: "", editable: false, editableIndex: "" });
            }
            else {
                const employeeList = [...this.state.employeeList];
                const replacement = {
                    id: employeeList[this.state.editableIndex].id,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email
                }
                employeeList.splice(this.state.editableIndex, 1, replacement);
                this.setState({ employeeList, firstName: "", lastName: "", email: "", editable: false, editableIndex: "" });
                document.getElementById("employeeList").style.pointerEvents = "auto";
                document.getElementById("employeeList").parentElement.style.cursor = "default";
                // tableContainer.style.pointerEvents = "auto";
            }
        }
    }

    editEmployee = (id) => {
        const onEmployeeEdit = this.state.employeeList.find(employee => { return id === employee.id });
        const onEmployeeEditIndex = this.state.employeeList.indexOf(onEmployeeEdit);
        this.setState({
            firstName: onEmployeeEdit.firstName, lastName: onEmployeeEdit.lastName, email: onEmployeeEdit.email, editable: true, editableIndex: onEmployeeEditIndex
        });
        document.getElementById("employeeList").style.pointerEvents = "none";
        document.getElementById("employeeList").parentElement.style.cursor = "not-allowed";
        // tableContainer.style.pointerEvents = "none";
    }

    removeEmployee = (id) => {
        const employeeList = this.state.employeeList.filter(employee => { return employee.id !== id });
        this.setState({ employeeList });
    }

    render() {
        return (
            <div className="EmployeeTable">
                <h1>EmployeeList</h1>
                <AddEmployeeForm handleChange={this.handleChange} addEmployee={this.addEmployee} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} />
                <EmployeeTable employeeList={this.state.employeeList} removeEmployee={this.removeEmployee} editEmployee={this.editEmployee} />
            </div>
        );
    }

}

export default EmployeeTableContainer;

