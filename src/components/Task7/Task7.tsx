import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Select from "../common/Select/Select";
import Radio from "../common/Radio/Radio";

const cities = ['Minsk', 'Moscow', 'Paris', 'Amsterdam'];
const genders = ['Male', 'Female'];

const Task7 = () => {
    const [city, setCity] = useState<string>('select city');
    const [gender, setGender] = useState<string>('select gender');

    return (
        <Container>
            <Row>
                <h3>Task 7</h3>
            </Row>
            <Row>
                <Col md={4}>
                    <p>Selected city: {city}</p>
                </Col>
                <Col md={4}>
                    <Select options={cities} value={city} onChange={setCity}/>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <p>Selected gender: {gender}</p>
                </Col>
                <Col md={4}>
                    <Radio inputValues={genders} name={'gender'} onChange={setGender} value={gender}/>
                </Col>
            </Row>
        </Container>
    )
};
export default Task7;
