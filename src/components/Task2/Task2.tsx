import React from "react";
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {toDoType} from "../../App";

type PropsType = {
    toDo: Array<toDoType>
    sortToDo: (arr: Array<toDoType>) => void
    removeToDo: (id: number) => void
}

const Task2: React.FC<PropsType> = props => (
    <Container>
        <Row>
            <Col xs={4} md={1}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Doings</th>
                        <th><span onClick={() => props.sortToDo(props.toDo)}>Importance&#8597;</span></th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.toDo.map(item => (
                        <tr key={item.id}>
                            <td>{item.n}</td>
                            <td>{item.p}</td>
                            <td><Button variant="outline-danger"
                                        onClick={() => props.removeToDo(item.id)}>&times;</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
);

export default Task2;