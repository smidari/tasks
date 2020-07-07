import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import {v1} from "uuid";

const Task3 = (props: any) => {
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

    function onNameChanged(e: ChangeEvent<HTMLInputElement>) {
        setName(e.currentTarget.value)
    }

    function onNameKeyPressed(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            toWelcome(name);
            setName('');
        }
    }

    return (
        <Container>
            <Row>
                <Col xs={4} md={5}>
                    <InputGroup className="mb-3">
                        <FormControl
                            value={name}
                            onChange={onNameChanged}
                            onKeyPress={onNameKeyPressed}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={toWelcomeOnClick}>Button</Button>
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