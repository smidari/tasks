import React from "react";
import Junior from "./Junior";
import {spinnerAC} from "../redux/spinner-reduser";
import {Dispatch} from "redux";
import {AppRootStateType} from "../redux/store";
import {connect} from "react-redux";

type mapStatePropsType = {
    loading: boolean
};
type mapDispatchPropsType = {
    spinnerAC: (type: boolean) => void
}

export type JuniorType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): mapStatePropsType => {
    return {
        loading: state.spinner.loading
    }
};
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        spinnerAC: (type) => (dispatch(spinnerAC(type))),
    }
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const JuniorContainer = connector(Junior);

export default JuniorContainer;

