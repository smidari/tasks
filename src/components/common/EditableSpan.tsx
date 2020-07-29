import React, {useState} from "react";
import MyInput from "./MyInput/MyInput";

type EditableSpanType = {
    valueSpan: string
    valueInput: string
    onChange: (value: string) => void
    saveValue: () => void
}

const EditableSpan = (props: EditableSpanType) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const deActivatedEditMode = () => {
        setEditMode(false);
        props.saveValue()
    };
    const activatedEditMode = () => setEditMode(true);

    return (
        editMode
            ?
            <MyInput
                value={props.valueInput}
                onChange={props.onChange}
                onBlur={deActivatedEditMode}
                autoFocus={true}/>
            : <span onDoubleClick={activatedEditMode}>{props.valueSpan}</span>
    )
};

export default EditableSpan;