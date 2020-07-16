import React from "react";
import s from "./MyBtn.module.css"

type MyBtnType = {
    onClick: () => void
    nameBtn: string
    styleBtn?: 'red'
}

const MyBtn = (props: MyBtnType) => (
    <button
        className={`${s.btn} ${props.styleBtn === 'red' ? s.btn_red : ''}`}
        onClick={props.onClick}
    >{props.nameBtn}
    </button>
);

export default MyBtn;