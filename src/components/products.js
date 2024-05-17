import React from 'react';
// Este export define un componente funcional llamado Products que acepta 'props' (propiedades) como argumento.
export function Products(props) {
    // Este componente retorna un conjunto de elementos JSX que representan la tarjeta de un producto.
    return (
        // La clase 'productList' es un contenedor para todas las tarjetas de productos.
        <div className='productList'>
            {/* Cada tarjeta de producto tiene una clase 'productCard' y una clave única basada en el id del producto. */}
            <div key={props.id} className='productCard'>
                {/* Esta es la imagen del producto usando la URL proporcionada en las props. */}
                <img src={props.image} alt='product-img' className='productImage'></img>
                
                {/* Este es el contenedor para el contenido textual de la tarjeta del producto. */}
                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        <div className='productSales'>{props.totalSales} Unidades Vendidas</div>
                    </div>
                    <div className='displayStack__2'>
                        <div className='productTime'>Quedan {props.timeLeft} dias</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
