import React from 'react';

const UserForm = () => {
    return (
        <div>
            <h1>User Signup</h1>
            <form className="ui form">
                <div className="form">
                    <label>First Name</label>
                    <input type="text"/>
                </div>
                <div className="form">
                    <label>Last Name</label>
                    <input type="text"/>
                </div>
                <div className="form">
                    <label>Email Address</label>
                    <input type="text"/>
                </div>
                <div className="form">
                    <label>Password</label>
                    <input type="text"/>
                </div>

                <button type="submit" className="ui button">Submit</button>
            </form>
        </div>
    )
}

export default UserForm;