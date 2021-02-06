import React from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from '../../components/UI/Input'
import { login } from "../../actions";
/**
* @author
* @function Signin
**/

const Signin = (props) => {
  const userLogin = (e) => {
      e.preventDefault();
      const user = {
          email: "jungbum@naver.com",
          password: "341341"
      }
      login(user);
  };

  return(
    <Layout>
        <Container>
            <Row style={{ marginTop: "3.5rem"}}>
                <Col md={{span: 6, offset: 3}}>
                    <Form onSubmit={() => {userLogin()}}>
                        <Input 
                            label="Email"
                            placeholder="Email"
                            value=""
                            type="text"
                            onChange={() => {
                            }}
                        />

                        <Input 
                            label="Password"
                            placeholder="Password"
                            value=""
                            type="password"
                            onChange={() => {
                            }}
                        />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>                
                </Col>
            </Row>
            
        </Container>
    </Layout>
   )

 }

export default Signin