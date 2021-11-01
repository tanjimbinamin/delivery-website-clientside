import React from 'react';
import {Button, Card} from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../CustomHooks/useAuth';


const Login = () => {

    const {signIn,setUser, setIsLoading}=useAuth();
    const history =useHistory()
    const location=useLocation()
    const uri =location.state ?.from || "/home"

    console.log(useAuth)

    const signInUsingGoogle=()=>{

        signIn()
        .then(res=>{
            setUser(res.user)
            history.push(uri)
            setIsLoading(true)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    return (
        <div className="text-center mt-5">
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Body className="mb-5 pb-4">
                    <Card.Title className="mb-5 pt-3 pb-4">Sign In with google</Card.Title>
                   
                    <Button  onClick={signInUsingGoogle} variant="danger">Sign in with Google</Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;