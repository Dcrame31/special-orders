import React, {useState} from "react";
import UserForm from './UserForm';

const UserContainer = () => {

    const [ toggle, setToggle ] = useState(false);


    return (
        <>
            <button type="submit" onClick={() => setToggle(!toggle)}>{toggle === true? 'Close Form' : 'Sign Up'}</button>
            {toggle && <UserForm/>}
        </>
    )
};

export default UserContainer;