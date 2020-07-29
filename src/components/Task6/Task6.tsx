import React, {useState} from "react";
import EditableSpan from "../common/EditableSpan";
import {Col, Container, Row} from "react-bootstrap";
import MyBtn from "../common/MyBtn/MyBtn";


const Task6 = () => {
    let [name, setName] = useState('Dasha');
    const [valueInput, setValueInput] = useState('');
    const saveName = () => (setName(valueInput));



    function saveState<T> (key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }
    type StateType = {
        name: string
    }
    function test () {
        saveState<StateType>("test", {name: "A"})
    };
    // получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста
    const state: StateType = restoreState<StateType>("test", {name:''});

    return (
        <Container>
            <h3>Task 6</h3>
            <Row>
                <Col md={4}>
                    <EditableSpan
                        valueSpan={name}
                        valueInput={valueInput}
                        onChange={setValueInput}
                        saveValue={saveName}/>

                </Col>
                <Col md={2}>
                    <button onClick={test}>test</button>
                    <button onClick={test}>delete</button>
                    <MyBtn onClick={()=>{}} nameBtn={'Save'} />
                    <MyBtn onClick={()=>{}} nameBtn={'Add'} />
                </Col>
            </Row>

        </Container>
    )
};

export default Task6;