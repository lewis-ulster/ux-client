import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from '../axios-default';
//import { AuthContext } from '../context/Auth'

export default function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log(email);
        console.log(password);
    
        axios.post('/users/login', {
            email: email,
            password: password
        })
        .then((res) => {
            localStorage.setItem("token", res.data);
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
    };


    return (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Enter email" 
                        onChange={ e => setEmail(e.target.value) } 
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
    )
}
