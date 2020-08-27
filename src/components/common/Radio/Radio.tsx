import React, {ChangeEvent} from "react";

type RadioType = {
    inputValues: Array<string>
    name: string
    onChange: (value: string) => void
    value: string
}
const Radio = (props: RadioType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)
    };
    return (
        <>
            {props.inputValues.map((item, index)=> (
                    <div key={index}>
                        <input
                            type="radio"
                            name={props.name}
                            value={item}
                            checked={props.value === item}
                            onChange={onChangeHandler}
                        /> {item}
                    </div>
                )
            )}
        </>
    )
};

export default Radio;
