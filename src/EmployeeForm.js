import React from 'react';

const EmployeeForm = (props) => {
    const { handleChange, addEmployee, cancelOperation, employee } = props;
    return (
        <form onSubmit={addEmployee}>
            <fieldset>
                <legend>Employee</legend>
                <label>FirstName:</label>
                <input type="text" onChange={handleChange} name="firstName" placeholder="First Name" value={employee.firstName} />
                <label>LastName:</label>
                <input type="text" onChange={handleChange} name="lastName" placeholder="Last Name" value={employee.lastName} />
                <label>email:</label>
                <input type="text" onChange={handleChange} name="email" placeholder="email" value={employee.email} />
                <button>submit</button>
                <button onClick={cancelOperation} >cancel</button>
            </fieldset>
        </form >

    );

}

export default EmployeeForm;