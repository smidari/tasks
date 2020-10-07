import React, {useCallback} from "react";
import style from './Range.module.css'

type PropsType = {
    minValue: number
    maxValue: number
    value: string
    onChange: (e: any) => void
}

let MyRange = React.memo((props: PropsType) => {

    return (
        <input
            className={style.range}
            type="range"
            min={props.minValue}
            max={props.maxValue}
            step="1"
            value={props.value}
            onChange={useCallback((e) => props.onChange(e.target.value),[props])}
        />
    )
});


export default MyRange;