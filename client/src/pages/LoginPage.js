import {useState} from 'react';
import Username from '../components/Username';
import Password from '../components/Password';
function LoginPage(){
    const [username, setUsername] =  useState('');
    const [password, setPassword] = useState('');
 

    // what do I wnat to do 
    // check if username and password matches 
    useEffect(() => {

    })

    const handleSubmit = async (e) =>{

        try{
            const response = await axios.post('/api/login', JSON.stringify({username,password}))

        }catch(err){
            if(!err?.respose){
                setErrMsg('No server Response ');
            }else if(err.response?.status === 409){
                setErrMsg('')
            }



        }


    }
 

    return(<>
    <form>
    
    <div className='form-group'>
        <label>Username: </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)}></input>
    </div>
    <div className="form-group">
        <label>Password: </label>
    <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
    <button type="button" className='btn btn-dark'>Login</button>
    </div>
    <button>Click here to sign up</button>
    </form>
    </>);
}
export default LoginPage;