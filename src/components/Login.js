import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});

    let history = useHistory();

    const onChange = (e)=> {
        setCredentials({...credentials, [e.target.name] : [e.target.value]})
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email[0], password: credentials.password[0]})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // save the auth token and redirect
            localStorage.setItem('token', json.data.token);
            history.push('/');
            props.showAlert('Logged in Successfully', 'success');
        }else{
            props.showAlert('Invalid Details', 'danger');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Username</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};
