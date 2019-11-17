import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Product({name, desc, price}) {

    return (
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src="https://cdn.pcpartpicker.com/static/forever/images/product/1b6084a197c46a295eb03b6ed062eda2.1600.jpg" />
            <Card.Body>
              <Card.Title>{ name }</Card.Title>
              <Card.Text>
                { desc }
              </Card.Text>
              <Card.Text>
              { price }
              </Card.Text>
          <Button variant="primary">Add to Basket</Button>
          </Card.Body>
        </Card>
    )
}
