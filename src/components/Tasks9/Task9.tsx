import React, {useState} from "react";
import MyBtn from "../common/MyBtn/MyBtn";
import {Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Task9 = () => {
    const [timerId, setTimerId] = useState();
    const [date, setDate] = useState(new Date());
    const UpdateTime = () => {
        const timer_id = setInterval(() => setDate(new Date()), 1000);
        setTimerId(timer_id)
    };
    const ClearInterval = () => {
        clearInterval(timerId);
    };

    return (
        <Container>
            <Row>
                <h3>Task 9</h3>
            </Row>
            <Row>
                <Col md={2}>
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip id={'tooltip'}>
                                {`${days[date.getDay()]} 
                                 ${date.getDate()} 
                                 ${months[date.getMonth()]} 
                                 ${date.getFullYear()}`}
                            </Tooltip>
                        }>
                        <h3>{date.toLocaleTimeString()}</h3>
                    </OverlayTrigger>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <MyBtn onClick={UpdateTime} nameBtn={'uptade'}/>
                    <MyBtn onClick={ClearInterval} nameBtn={'clear'}/>
                </Col>
            </Row>
        </Container>
    )
};


export default Task9;
