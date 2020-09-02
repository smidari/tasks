import React from "react";
import Task6 from "../Task6/Task6";
import Task7 from "../Task7/Task7";
import Task8 from "../Task8/Task8";
import Task9 from "../Tasks9/Task9";
import MyBtn from "../common/MyBtn/MyBtn";
import spinner from '../../assets/spinner.svg'
import {JuniorType} from "./JuniorContainer";

const Junior = (props: JuniorType) => {
    const onclickHandler = () => {
        props.spinnerAC(true);
        setTimeout(function () {
            props.spinnerAC(false)
        }, 3000);
    };
    return (
        <>
            <MyBtn onClick={onclickHandler} nameBtn={'Spinner'}/>
            {props.loading ? <div><img src={spinner} alt={'loader'}/></div> : <>
                <Task6/>
                <Task7/>
                <Task8/>
                <Task9/>
            </>}
        </>
    )
};

export default Junior;