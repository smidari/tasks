import React from "react";
import s from "./MyCheckBox.module.css"

type CheckBoxType = {
    checked: boolean
    onChange: (e: boolean) => void
}

const MyCheckBox = (props: CheckBoxType) => (
    <input
        type="checkbox"
        className={s.checkbox}
        checked={props.checked}
        onChange={event => props.onChange(event.currentTarget.checked)}/>
);

export default MyCheckBox;
