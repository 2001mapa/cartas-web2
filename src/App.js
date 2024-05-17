//También importamos useState y useEffect, que son hooks de React
import React, { useState, useEffect } from 'react';
import { Products } from './components/products';
import productData from './content';

export default function App() {
//El useState se utiliza para definir un estado en un componente funcional y luego dentro del useEffect se actualiza este estado después de que han pasado 1 segundo, simulando la carga de datos 
    const [products, setProducts] = useState([]);
    //El useEffect se ejecuta después de que el componente se monta en el DOM
    useEffect(() => {
        setTimeout(() => {
            // Actualiza el estado con los datos de los productos después de un segundo
            setProducts(productData);
        }, 1000);
    }, []);

    return (
        <div className='App'>
            <ul>
{/*El (products.map) mapea los datos de los productos y renderiza cada uno usando el componente Products */}
            {products.map(product => (
                <li className='punto'>
                {/*Esto son los props que se usaran para almacenar los datos de los productos*/}
                <Products 
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                totalSales={product.totalSales}
                timeLeft={product.timeLeft}
                rating={product.rating}
                />
                </li>  
            ))}
            </ul>    
        </div>
    );
}
