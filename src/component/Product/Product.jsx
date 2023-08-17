import React, { useState } from 'react';
import './Product.css';
import {FaStar} from "react-icons/fa";

function Product() {
    const Product = [
    {
        image: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        title: 'Antipasto',
        price: '27.00',
        review:'4.9',
        category: ['snack', 'lunch'],
    },
    {
        image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        title: 'Chicken Wings',
        price: '17.00',
        review:'4.8',
        category: 'snack',
    },
    {
        image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
        title: 'Pasta',
        price: '7.99',
        review:'4.8',
        category: 'snack',
    },
    {
        image: 'https://images.unsplash.com/photo-1623855244183-52fd8d3ce2f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        title: 'Tomato Salad',
        price: '17.00',
        review:'4.6',
        category: ['breakfast', 'lunch']
    },
    {
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
        title: 'Margherita Pizza',
        price: '12.50',
        review:'4.6',
        category: 'lunch',
    },
    {
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        title: 'Lasagna ',
        price: '21.00',
        review:'4.5',
        category: ['breakfast', 'lunch']
    },
]

    const [data, setData] = useState(Product);
    const [filter, setFilter] = useState(data);

    const product_cards = filter.map((product) => {
        return (
            <>
            <div className='card'>
                <img src={product.image} alt={product.title} />
                <div className='card-body'>
                    <div className="card-header">
                        <h4 className='card-title'>{product.title}</h4>
                        <p className='card-price'>$ {product.price}</p>
                    </div>
                    
                    <div className="card-description">
                        <p>eiusmod tempor incididunt ut labore et dolore magna dolore mag</p>
                    </div>

                    <span className='review'>
                        <p className='card-score'><FaStar className='icon'/>  {product.review}/5</p>
                        <p className='card-score-people'>(100+)</p>

                        <a href="#"><button className='btn-cart'>Add to cart</button></a>
                    </span>

                    
                    
                    
                    
                </div>
            </div>
            </>
        )
    })

    const filterProduct = (cat) => {
        const updatedList = data.filter(product => product.category.includes(cat));
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='filter_btn'>
                    <button className='recommend' onClick={() => setFilter(data)}>ALL</button>
                    <button className='lunch' onClick={() => filterProduct('lunch')}>LUNCH</button>
                    <button className='snack' onClick={() => filterProduct('snack')}>SNACKS</button>
                    <button className='breakfast'onClick={() => filterProduct('breakfast')}>BREAKFAST</button>
                </div>

            
            </>
        );
    };

    return (
        <div className='order-container'>
        <div className='filter'>
            <h1>Order for delivery</h1>
            <p>Savor the rich aromas, fresh ingredients, and traditional recipes that define the essence of Italy. Enjoy the convenience 
            of ordering your favorite Italian dishes whenever the craving strikes, and let us bring the taste of Italy to you. Buon Appetito!</p>
            {ShowProducts()} {/* You need to invoke the ShowProducts component */}
        </div>

            <div className="product-wrapper">
                {product_cards}
            </div>
        </div>
        
    );
}

export default Product;