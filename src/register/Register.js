import { useState } from "react";

function Register() {

    const[control, setControl] = useState({});

    const onSubmitForm = (e) => {
        e.preventDefault();
        control.log(control);

    }
    
    const inputChange = (e) =>{
        let value = e.target.value;
        let name = e.target.name;
        setControl(control => ({...control,[name]: value}))
    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <table>
                    <tr>
                        <td>username</td>
                        <td><input name="userName" onChange={inputChange}/></td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td><input name="email" onChange={inputChange}/></td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td><input name="password" type="password" onChange={inputChange}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="submit">Submit</button></td>
                    </tr>
                </table>
            </form>
        </>
    );
}

export default Register;