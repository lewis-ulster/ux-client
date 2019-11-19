import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from '../axios-default'

class NewProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null,
            description: null,
            price: null,
            image: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        
        axios.post('/products', data)
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
                        placeholder="Product Name" 
                        name = "name"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Description" 
                        name = "description"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" 
                        placeholder="Price" 
                        name = "price"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="link">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Link" 
                        name = "image"
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