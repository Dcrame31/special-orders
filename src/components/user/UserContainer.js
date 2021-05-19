import React, {useState} from "react";
import SignupForm from '../signup/SignupForm';

const UserContainer = () => {

    const [ toggle, setToggle ] = useState(false);


    return (
        <>
            <button type="submit" onClick={() => setToggle(!toggle)}>{toggle === true? 'Close Form' : 'Sign Up'}</button>
            {toggle && <SignupForm/>}
        </>
    )
};

export default UserContainer;