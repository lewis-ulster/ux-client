import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Product({image, name, desc, price}) {

    return (
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src={ image } />
            <Card.Body>
              <Card.Title>{ name }</Card.Title>
              <Card.Text>
                { desc }
              </Card.Text>
              <Card.Text>
              { price }
              </Card.Text>
          <Button variant="primary">Add to Basket</Button>
          <Button variant="secondary">Add to Wishlist</Button>
          </Card.Body>
        </Card>
    )
}
