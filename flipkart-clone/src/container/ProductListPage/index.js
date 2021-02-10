import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout';
import './style.css';

/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
    }, [])
    return(
        <Layout>
            {
                product.
            }
            <div className="card">
                <div className="cardHeader">
                    <div>Samsung mobile under 10k</div>
                    <button>View All</button>
                </div>
                <div>
                    <div className="productContainer">
                        <div className="productImgContainer">
                            <img src="http://localhost:2000/public/WZpPQoK5I-52e27980185045.Y3JvcCwxOTk5LDE1NjQsMCwzOQ.png" alt=""/>
                        </div>
                        <div className="productInfo">
                            <div style={{ margin: '0.3rem 0'}}>Samsumg 4gb phone</div>
                            <div>
                                <span>4.3</span>&nbsp;
                                <span>3353</span>
                            </div>
                            <div className="productPrice">5000</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductListPage