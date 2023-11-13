import {useState} from 'react';
function Username(){
    const [username, setUsername] = useState('');

    const userNameChangeHandler = (event) =>{
        console.log(event.target.value);
        setUsername(event.target.value);

    }
    return(<>
    <label>Username</label>
    <input className="form-control" type="email" onChange={userNameChangeHandler}/>
    </>);
}
export default Username;