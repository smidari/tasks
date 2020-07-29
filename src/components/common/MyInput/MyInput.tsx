import React, {KeyboardEvent} from "react";
import m from "./MyInput.module.css"

type MyInputType = {
    value: string
    onChange: (e: string) => void
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
    error?: boolean
    onBlur?: () => void
    autoFocus?: boolean
};

const MyInput = (props: MyInputType) => (
    <input
        className={`${m.input} ${props.error ? m.error : ''}`}
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
        onKeyPress={props.onKeyPress}
        onBlur={props.onBlur}
        autoFocus={true}
    />
);

export default MyInput;

