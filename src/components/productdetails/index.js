import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios';
import { FaChevronUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const Productsdetails = () => {
    const [oldProducts, setProducts] = useState([])
    const [likedItems, setLikedItems] = useState([]);
    const [coustomizeVisible, customizeNotVisible] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                const data = response.data
                setProducts(data)
                console.log(data)
            }
            catch (error) {
                console.log(error)
            }
        };
        fetchData()
    }, []);

    const toggleLike = (id) => {
        setLikedItems(prevLikedItems => {
            if (prevLikedItems.includes(id)) {
                return prevLikedItems.filter(itemId => itemId !== id);
            } else {
                return [...prevLikedItems, id];
            }
        });
    }

    const itemsCoustomize = () => {
        customizeNotVisible(!coustomizeVisible)
    }

    return (
        <div className='main-conatainer-product-deatils'>


            <div>
                <ul className='ul-order-product'>
                    <button onClick={itemsCoustomize} className='button-for-side-navigations'>
                        <li>
                            <div className='list-items-filters-container'>
                                <div className='container-side-navigation'>
                                    <h5 className='heading-span-product-details'>IDEAL FOR</h5>
                                    <span>All</span>
                                </div>
                                <div>
                                    <span><FaChevronUp /></span>
                                </div>
                                <div>
                                </div>
                            </div>
                        </li>
                    </button>
                    <div className={`div-side-navigation-container ${coustomizeVisible ? 'div-side-navigation-container-2' : ''}`}>
                        <div>
                            <input id='mens' type='checkbox' />
                            <label htmlFor='mens'>Mens</label>
                        </div>
                        <div>
                            <input id='womens' type='checkbox' />
                            <label htmlFor='womes'>Womens</label>
                        </div>
                        <div>
                            <input id='kids' type='checkbox' />
                            <label htmlFor='kids'>Kide</label>
                        </div>
                    </div>
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
                            <img alt={item.id} className='images-products' src={item.image} />
                            <hr />
                            <div className='like-price-container'>
                                <h2 className='price-size'>${item.price}</h2>
                                <button className='button-heart' onClick={() => toggleLike(item.id)}>
                                    <FaHeart className={`icon-heart ${likedItems.includes(item.id) ? 'liked' : ''}`} />
                                </button>
                            </div>
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


