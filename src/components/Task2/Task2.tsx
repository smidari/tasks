import React from "react";
import {Col, Container, Row, Table} from "react-bootstrap";
import {toDoType} from "../../App";
import MyBtn from "../common/MyBtn/MyBtn";

type PropsType = {
    toDo: Array<toDoType>
    sortToDo: (arr: Array<toDoType>) => void
    removeToDo: (id: number) => void
}

const Task2: React.FC<PropsType> = props => {
        return <Container>
            <h3>Task 2</h3>
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
                                <td><MyBtn onClick={() => props.removeToDo(item.id)} nameBtn={'remove'} styleBtn={'red'}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    }
;

export default Task2;