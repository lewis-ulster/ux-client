import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from '../axios-default'

class NewProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null,
            email: null,
            permission: null,
            password: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        
        axios.post('/users/register', data)
        .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    render () {
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Name" 
                        name = "name"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control type="text" 
                        placeholder="E-Mail" 
                        name = "email"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="permission">
                        <Form.Label>Permission Level</Form.Label>
                        <Form.Control as="select" 
                        placeholder="Permission level" 
                        name = "permission"
                        onChange={this.handleChange}
                        >
                            <option>Admin</option>
                            <option>User</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                        placeholder="" 
                        name = "password"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default NewProduct