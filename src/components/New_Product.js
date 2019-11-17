import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from '../axios-default';

export default function NewProduct() {

    const [submit, setSubmit] = useState({
        name: '',
        description: '',
        price: 0,
        image: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        axios.post('/products', submit)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };


    return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Product Name" 
                        onChange={e => setSubmit({ name : e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group controlId="desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Description" 
                        onChange={e => setSubmit({ description : e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" 
                        placeholder="Price" 
                        onChange={e => setSubmit({ price : e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group controlId="link">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Link" 
                        onChange={e => setSubmit({ image : e.target.value })}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
    )
}
