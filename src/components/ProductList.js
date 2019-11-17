import React, { useContext, useEffect, useState } from 'react'
import axios from '../axios-default';
import Product from './Product';
import CardDeck from 'react-bootstrap/CardDeck';
import { ProductContext } from '../context/ProductContext'

export default function ProductList() {

   // const [context, setContext] = useContext(ProductContext);
    const [context, setContext] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    const getData = () => {
        axios.get('http://localhost:5000/products')
        .then(res => {
            setContext(res.data);
            setLoad(true);
        })
        .catch(err => {
            setError(err.message);
            setLoad(true);
        })
    }
    useEffect(() => {
        getData();  
    }, [])

    if(load){
        return (
            <CardDeck>
                {context.map((product, index) => <Product key={index} name={product.name} desc={product.description} price={product.price}/>)}
            </CardDeck>)
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
        
}
