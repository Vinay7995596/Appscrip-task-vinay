import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios';
import { FaChevronUp } from "react-icons/fa";


const Productsdetails = () => {
    const [oldProducts, setProducts] = useState([])
   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            const data = response.data
            setProducts(data)
            console.log(data)
        }
        catch (error){
            console.log(error)
        }
    };
    fetchData()
   },[]);

    return(
        <div className='main-conatainer-product-deatils'>
            <div>
                <ul className='ul-order-product'>
                    <li className='list-items-filters-container'>
                        <div>
                            <h5 className='heading-span-product-details'>IDEAL FOR</h5>
                            <span>All</span>
                        </div>
                        <div>
                            <span><FaChevronUp /></span>
                        </div>
                    </li>
                    <li className='list-items-filters-container'>
                    <div>
                            <h5 className='heading-span-product-details'>OCCASION</h5>
                            <span>All</span>
                        </div>
                        <div>
                            <span><FaChevronUp /></span>
                        </div>
                    </li>
                    <li className='list-items-filters-container'>
                        
                        <div>
                            <h5 className='heading-span-product-details'>WORK</h5>
                            <span>All</span>
                        </div>
                        <div>
                            <span><FaChevronUp /></span>
                        </div>
                        
                    </li>
                    <li className='list-items-filters-container'>
                    <div>
                            <h5 className='heading-span-product-details'>FABRIC</h5>
                            <span>All</span>
                        </div>
                        <div>
                            <span><FaChevronUp /></span>
                        </div>
                    </li>
                    <li className='list-items-filters-container'>
                    <div>
                            <h5 className='heading-span-product-details'>SEGMENT</h5>
                            <span>All</span>
                        </div>
                        <div>
                            <span><FaChevronUp /></span>
                        </div>
                    </li>
                    <li className='list-items-filters-container'>
                    <div>
                            <h5 className='heading-span-product-details'>SUITABLE FOR</h5>
                            <span>All</span>
                        </div>
                        <div>
                            <span><FaChevronUp /></span>
                        </div>
                    </li>
                    <li className='list-items-filters-container'>
                    <div>
                            <h5 className='heading-span-product-details'>RAW MATERIALS</h5>
                            <span>All</span>
                        </div>
                        <div>
                            <span><FaChevronUp /></span>
                        </div>
                    </li>
                    <li className='list-items-filters-container'>
                    <div>
                            <h5 className='heading-span-product-details'>PATTERN</h5>
                            <span>All</span>
                        </div>
                        <div>
                            <span><FaChevronUp /></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
               <ul className='list-total-container'>
                {oldProducts.map(item => (
                    <li className='list-container-products' key={item.id}>
                    <img className='images-products' src={item.image}/>
                    <h3 className='list-item-tittle'>{item.title}</h3>
                    <p className='item-list-descreption'>{item.description}</p>
                </li>
                ))}
               </ul>
            </div>
        </div>
    )
}

export default Productsdetails