import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import MyNavbar from "./components/Navbar/MyNavbar";
import {Col, Container, Row} from "react-bootstrap";
import PreJunior from "./components/pages/PreJunior";
import Junior from "./components/pages/Junior";
import JuniorPlus from "./components/pages/JuniorPlus";

const App = () => (
    <HashRouter>
        <Container>
            <Row>
                <Col md={3}>
                    <MyNavbar/>
                </Col>
                <Col md={9}>
                    <Route path='/PreJunior' component={PreJunior}/>
                    <Route path='/Junior' component={Junior}/>
                    <Route path='/Junior+' component={JuniorPlus}/>
                </Col>
            </Row>
        </Container>
    </HashRouter>
);

export default App;

