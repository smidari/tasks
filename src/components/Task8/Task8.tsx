import React, {useState} from "react";
import MyBtn from "../common/MyBtn/MyBtn";
import {Col, Container, Row, Table} from "react-bootstrap";
import {checkAction, hwReducer, sortAction, StateType} from "../../homeWorkReducer";

const Task8 = () => {
    const [people, setPeople ] = useState<StateType>([
        {id: '1', name: 'Dasha', age: 18},
        {id: '2', name: 'Anna', age: 19},
        {id: '3', name: 'Rita', age: 20},
        {id: '4', name: 'John', age: 17},
        {id: '5', name: 'Santa', age: 33},
        {id: '6', name: 'Max', age: 22},
        {id: '7', name: 'Dina', age: 10}
    ]);

    const sortUpHandle = () => {setPeople( hwReducer(people, sortAction('up')))};
    const sortDownHandle = () => {setPeople( hwReducer(people, sortAction('down')))};
    const checkHandle = () => {setPeople( hwReducer(people, checkAction(18)))};

    return (
        <>
            <Container>
                <Row>
                    <h3>Task 8</h3>
                </Row>

                <Row>
                    <Col  md={4}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                            </thead>
                            <tbody>
                            {people.map(item => <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>)}
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={4}>
                        <MyBtn onClick={sortUpHandle} nameBtn={'sort up'}/>
                        <MyBtn onClick={sortDownHandle}  nameBtn={'sort down'}/>
                        <MyBtn onClick={checkHandle} nameBtn={'check'}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Task8;