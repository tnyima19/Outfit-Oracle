import {useState} from 'react';
import Username from '../components/Username';
import Password from '../components/Password';
function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userNameChangeHandler = (event) =>{
        setUsername(event.target.value);

    }
    const passwordChangeHandler = (event) =>{
        setPassword(event.target.value);
    }

    return(<>
    <form>
    
    <div className='form-group'>
        <Username />
    </div>
    <div className="form-group">
    <Password />
    <button type="button" className='btn btn-dark'>Login</button>
    </div>
    <button>Click here to sign up</button>
    </form>
    </>);
}
export default LoginPage;