import React from "react";
import style from "./Task1.module.css";
import {Container, Row, Сol, Image} from "react-bootstrap";

type Task1Type = {
    name: string,
    text: string,
    time: string
}

const Task1: React.FC<Task1Type> = props => (
    <Container className={style.dialog}>
        <Row>
            <Col xs={4} md={1} className={style.avatar}>
                <Image
                    src="https://lh3.googleusercontent.com/proxy/ZPE6AtomrywrvAsG7RZ6u5RXGIdFjxV4Q_eNwE8BrpSe3zSTVOA66jkMxFXHoHJuXJ4ZfTHQ6S1BwKbkSYexFZ9ER-GaPcQZwr0KkDnRovSjEj2luIO0BqoM4Q"/>
            </Col>
            <Col xs={6} md={3} className={style.message}>
                <h6>{props.name}</h6>
                <span className={style.text}>{props.text}</span>
                <span className={style.time}>{props.time}</span>
            </Col>
        </Row>
    </Container>
);

export default Task1;