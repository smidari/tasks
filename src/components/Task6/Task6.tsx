import React, {useState} from "react";
import EditableSpan from "../common/EditableSpan";
import {Col, Container, Row} from "react-bootstrap";
import MyBtn from "../common/MyBtn/MyBtn";

type StateType = {
    name: string
}

export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) {
        defaultState = JSON.parse(stateAsString) as T;
    }
    return defaultState;
}

const Task6 = () => {
    let [name, setName] = useState('Dasha');
    const [valueInput, setValueInput] = useState('');

    const saveName = () => (setName(valueInput));

    const saveStateHandler = () => saveState('name', {name: name});

    const restoreNameHandler = () => {
        const stateFromLocalStorage = restoreState('name', {name: ''});
        setName(stateFromLocalStorage['name'])
    };

    return (
        <Container>
            <Row>
                <h3>Task 6</h3>
            </Row>
            <Row>
                <Col md={4}>
                    <EditableSpan
                        valueSpan={name}
                        valueInput={valueInput}
                        onChange={setValueInput}
                        saveValue={saveName}/>

                </Col>
                <Col md={4}>
                    <MyBtn onClick={saveStateHandler} nameBtn={'Save'}/>
                    <MyBtn onClick={restoreNameHandler} nameBtn={'Restore'}/>
                </Col>
            </Row>

        </Container>
    )
};

export default Task6;