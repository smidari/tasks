import React, {useState} from "react";
import s from "./Task4.module.css"
import MyInput from "../common/MyInput/MyInput";
import MyBtn from "../common/MyBtn/MyBtn";
import {Col, Container, Row} from "react-bootstrap";
import MyCheckBox from "../common/MyCheckBox/MyCheckBox";

const Task4 = () => {
    let [testInput, setTestInput] = useState('');
    let [testCheckBox, setTestCheckBox] = useState(false);
    return (
        <Container>
            <h3>Task 4</h3>
            <Row>
                <Col xs={4} md={5}>
                    <MyInput
                        value={testInput}
                        onChange={setTestInput}/>
                    <MyInput
                        value={testInput}
                        onChange={setTestInput}
                        error={true}/>
                    <MyBtn
                        onClick={() => {
                        }}
                        nameBtn={'Test'}/>
                    <MyBtn
                        onClick={() => {
                        }}
                        nameBtn={'Test'}
                        styleBtn={'red'}/>
                    <MyCheckBox
                        checked={testCheckBox}
                        onChange={setTestCheckBox}/>
                </Col>
            </Row>
        </Container>
    )
};

export default Task4;