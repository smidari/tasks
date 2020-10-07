type initialStateType = {}
type ActionsType = themaSiteBlackACType | themaSiteWhiteACType | themaSiteGreenACType;
type themaSiteBlackACType = {
    type: 'BLACK'
};
type themaSiteWhiteACType = {
    type: 'WHITE'
};
type themaSiteGreenACType = {
    type: 'GREEN'
};
export const themaSiteReducer = (state: initialStateType, action: ActionsType) => {
    switch (action.type) {
        case 'BLACK': {
            return state;
        }

        case 'WHITE': {
            return state;
        }

        case 'GREEN': {
            return state;
        }
    }
};
export const themaSiteBlackAC = (): themaSiteBlackACType => ({type: "BLACK"});
export const themaSiteWhiteAC = (): themaSiteWhiteACType => ({type: "WHITE"});
export const themaSiteGreenAC = (): themaSiteGreenACType => ({type: "GREEN"});