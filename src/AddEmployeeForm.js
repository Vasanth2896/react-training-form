import React, { Component } from 'react';

class AddEmployeeForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.addEmployee}>
                <fieldset>
                    <legend>Employee</legend>
                    <label>FirstName:</label>
                    <input type="text" onChange={this.props.handleChange} id="firstName" placeholder="First Name" value={this.props.firstName} />
                    <label>LastName:</label>
                    <input type="text" onChange={this.props.handleChange} id="lastName" placeholder="Last Name" value={this.props.lastName} />
                    <label>email:</label>
                    <input type="text" onChange={this.props.handleChange} id="email" placeholder="email" value={this.props.email} />
                    <button>submit</button>
                    <button>cancel</button>
                </fieldset>
            </form >
        )
    }
}

export default AddEmployeeForm;