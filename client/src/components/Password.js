import {useState} from 'react';
function Password(){
    const [password, setPassword] = useState('');

    const passwordChangeHandler = (event) =>{
        console.log(event.target.value);
        setPassword(event.target.value);
    }
    return(<>
    <label>Password</label>
    <input type="password" className="form-control" onChange={passwordChangeHandler}></input>
    </>);

}
export default Password;