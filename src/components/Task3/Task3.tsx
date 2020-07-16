import React, {useState, KeyboardEvent} from "react";
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import {v1} from "uuid";
import MyInput from "../common/MyInput/MyInput";
import MyBtn from "../common/MyBtn/MyBtn";

const Task3 = () => {
    let [arrNames, setArrNames] = useState([{}]);
    let [name, setName] = useState('');

    function toWelcome(name: string) {
        if (name !== '') {
            let newNameForArr = {id: v1(), name: name};
            (Object.keys(arrNames[0]).length === 0) ?
                setArrNames([newNameForArr]) :
                setArrNames([newNameForArr, ...arrNames]);
            alert(`Hello ${name}`);
        }
    }

    function toWelcomeOnClick() {
        toWelcome(name);
        setName('');
    }

    function onNameKeyPressed(e: KeyboardEvent<HTMLInputElement>) {
        (e.key === "Enter") && toWelcomeOnClick()
    }

    return (
        <Container>
            <h3>Task 3</h3>
            <Row>
                <Col xs={4} md={5}>
                    <InputGroup className="mb-3">
                        < MyInput value={name} onChange={setName} onKeyPress={onNameKeyPressed} />
                        <InputGroup.Append>
                            <MyBtn onClick={toWelcomeOnClick} nameBtn={'Add'}/>
                        </InputGroup.Append>
                    </InputGroup>
                    <p>Количество имен {
                        (Object.keys(arrNames[0]).length === 0) ?
                            (arrNames.length - 1) :
                            arrNames.length
                    }
                    </p>
                </Col>
            </Row>
        </Container>
    )
};

export default Task3;