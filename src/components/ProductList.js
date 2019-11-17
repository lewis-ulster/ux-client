import React, { useContext /*useEffect, useState*/ } from 'react'

import Product from './Product';
import CardDeck from 'react-bootstrap/CardDeck';
import { ProductContext } from '../context/ProductContext'

import Spin from './Spin'

export default function ProductList() {

   // const [context, setContext] = useContext(ProductContext);
    const [context, setContext] = useContext(ProductContext);
    console.log(context);
    //const [load, setLoad] = useState(false);
    //const [error, setError] = useState('');


    

    if(context.load){
        return (
            <CardDeck>
                {context.products.map((product) => <Product key={product._id} image={product.image} name={product.name} desc={product.description} price={product.price}/>)}
            </CardDeck>
            ) 
        }
    else {
        return(
            <Spin />
        )
    }    
}
