// https://masterclass.kimitsu.it-incubator.ru/api/products

import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export const BestSellers = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios
        .get('https://masterclass.kimitsu.it-incubator.ru/api/products').
        then((res) => setProducts(res.data))
    }, [])
    return (
        <div className="bestSeller">
               <h2>Best Seller</h2>
               <div className="cards">
                {products.map((product) => {
                    return (
                        <div className="card" key={product.id}>
                <img src={product.image} />
                <h4>{product.title}</h4>
                <p className="price">${product.price}</p>
                <Link to={`${product.id}`}>Show more</Link>
               </div>
                    )
                })}
               </div>
            </div>
    )
}