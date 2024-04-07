import './index.css'

const Normalheading = () => {
    return (
        <div>
            <div className='container-second-section'>
                <div>
                    <h5 className='normal-headong'>DISCOVER OUR PRODUCTS</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </div>
            </div>
            <div>
                <hr />
                <div className='middle-option-target'>
                    <div>
                        <h5 className='items-fliter-heading-target'>3425 ITEMS</h5>
                    </div>
                    <div>
                        <select className='select-options'>
                            <option>RECOMMENDED</option>
                            <option>NEWEST FIRST</option>
                            <option>POPULAR</option>
                            <option>PRICE: LOW to HIGH</option>
                            <option>PRICE: HIGH to LOW</option>
                        </select>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Normalheading