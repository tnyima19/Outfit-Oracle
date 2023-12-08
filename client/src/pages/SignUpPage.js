import Username from '../components/Username';
import Password from '../components/Password';
import { useRef, useState, useEffect } from 'react';
//import {faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../api/axios';
const REGISTER_URL = '/signup';
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/ ;
function SignUpPage(){
    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false); // this if we have focus on that input field. 

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    // state for error messages. 
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // for setting the focus
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // validate user name 
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    // for password
    useEffect(() =>{
        const result = PWD_REGEX.test(pwd); // boolean
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd; // confirmation boolean
        setValidMatch(match);
    }, [pwd, matchPwd]) //dependency array, 


    useEffect(() => {
        setErrMsg('');
        

        //optional return function

        /*
        return () => {
            console.log(' I am being cleaned up' );
        };
        */

    },[user, pwd, matchPwd]) // what it shoudl react to , (dependency array)
    // runs atleast once at first, 
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2){
            setErrMsg("Invalid Entry");
            return ;
        }
        try{
            const respons = await axios.post('/api/singup', JSON.stringify({user, pwd}), 
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });
                //console.log(response.data);
                //console.log(response.accessToken);
                //console.log(JSON.stringify(response));
                setSuccess(true);
                // clearr input fields
        }catch (err){
            if(!err?.response){
                setErrMsg('No server Response');
            }else if(err.response?.status === 409){
                setErrMsg('Username Taken');
            }else{
                setErrMsg('Registration Failed');
            }
            err.Ref.current.focus();
        }

    }
    return(
        <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </section>
        ):(
        <section>
        <p ref={errRef} className={errMsg ? "errmsg": "offscreen"}>{errMsg}</p>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label html="username">UserName: 
                <span className={validName ? "valid" : "hide"}>
                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                </span>
                <span className={validName || !user ? "hide" : "invalid"} >
                    {/* <FontAwesomeIcon icon={faTimes} /> */}
                </span>
            </label>
            <input
                type="text"
                id="username"
                autoComplete="off"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() =>setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && user && !validName ? "instruction" :"offscreen"}>
                {/* <FontAwesomeIcon icon={faInfoCircle}/> */}
                4 to 24 characters. <br />
                Must begin with a letter. <br />
                Letters, numbers, underscores, hyphens allowed.
            </p>
            <label htmlFor='password'>
                Password: 
                <span className={validPwd ? "valid" : "hide" }>
                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    {/* <FontAwesomeIcon icon={faTimes} /> */}
                </span>
            </label>
                <input 
                    type="password"
                    id="password"
                    onChange={(e)=>setPwd(e.target.value)}
                    required 
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwd(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character. <br />
                </p>
           
                <label htmlFor='confirm_pwd'>
                Confirm Password: 
                <span className={validMatch && matchPwd ? "valid" : "hide" }>
                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                    {/* <FontAwesomeIcon icon={faTimes} /> */}
                </span>
                </label>
                <input 
                    type="password"
                    id="password"
                    onChange={(e)=>setPwd(e.target.value)}
                    required 
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                

                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                    Must match the first password input field.
                </p>
                
                <button disabled={!validName || !validPwd || !validMatch ? true: false}>Sign Up </button>
        </form>
        <p>
            Already registered ?<br />
            <span className="line">
                {/*put router link here */}
                <a href="#">Sign In</a>
            </span>
        </p>   
     
    </section>    
        )}
        </>
    )
}

export default SignUpPage;