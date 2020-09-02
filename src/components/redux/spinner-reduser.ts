type initialStateType = {
    loading: boolean
}
type ActionsType = spinnerACType;
type spinnerACType = {
    type: 'SET_LOADING'
    loading: boolean
}
const spinnerReduser = (state: initialStateType = {loading: false}, action: ActionsType) => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loading: action.loading};
        }
        default:
            return state;
    }
};
export const spinnerAC = (type: boolean): spinnerACType => ({type: 'SET_LOADING', loading: type});
export default spinnerReduser;