function RegisterFormHook() {
    const {register,handleSubmit, formState: {errors}} = useForm({});

    const onSubmitForm = data => console.log(data); 
    return ( 
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
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

export default RegisterFormHook;