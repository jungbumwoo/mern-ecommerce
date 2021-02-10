import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout'

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
            <p>Product list Page</p>
        </Layout>
    )
}

export default ProductListPage