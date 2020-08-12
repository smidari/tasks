import React, {ChangeEvent} from "react";
import {Form} from "react-bootstrap";

type SelectType = {
    options: Array<string>
    value: string
    onChange: (value: string) => void
}
const Select = (props: SelectType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.target.value)
    };
    return (
        <>
            <Form.Control as="select" onChange={onChangeHandler} value={props.value}>
                {props.options.map((item, index) => <option key={index} value={item}>{item}</option>)}
            </Form.Control>
        </>
    )
};
export default Select;
