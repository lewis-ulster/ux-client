import React, {useState, createContext, useEffect} from 'react';
import axios from '../axios-default';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [context, setContext] = useState({
        products: [],
        load: false,
        error: ''
        })

    const getData = () => {
        axios.get('/products')
        .then(res => {
            setContext({
                products: res.data,
                load: true
            });
        })
        .catch(err => {
            setContext({
                load: true,
                error: err.message
            });
        })
    }

    useEffect(() => {
        getData();  
    }, [])

    return (
        <ProductContext.Provider value={[context, setContext]}>
            { props.children }
        </ProductContext.Provider>
        );
    
};