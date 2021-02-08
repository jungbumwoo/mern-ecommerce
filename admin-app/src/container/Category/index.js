import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions';
import Layout from '../../components/Layout';
/**
* @author
* @function Category
**/

const Category = (props) => {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    console.log("categoty!! at Category Component")
    console.log(category);
    useEffect(() => {
        console.log("categort useEffect 1")
        dispatch(getAllCategory());
    }, []);

    const renderCategories = (categories) => {
        console.log("categories at Category Component");
        let mycategories = [];
        for(let category of categories){
            mycategories.push(
                <li key={category.name}>
                    {category.name}
                </li>
            );
        }

        return mycategories;
    }

    return(
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h1>Category</h1>
                            <button>Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul>
                            <p>shit</p>{/* { renderCategories(category.categories) } */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Category