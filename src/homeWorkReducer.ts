export type StateType = Array<{ id: string, name: string, age: number }>;
type ActionsType = SortArrayByName | Adults

type SortArrayByName = {
    type: 'SORT'
    sort: string
}
type Adults = {
    type: 'CHECK'
    age: number
}

export const sortAction = (sort: string): SortArrayByName => ({type: 'SORT' as const, sort: sort});
export const checkAction = (age: number): Adults => ({type: 'CHECK' as const, age: age});

export const hwReducer = (state: StateType, action: ActionsType) => {
    switch (action.type) {
        case 'SORT':
            if (action.sort === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1);
            } else if (action.sort === 'down') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1).reverse();
            }
            throw new Error("i don't understand this payload in type of 'SORT' ");
        case 'CHECK':
            return [...state].filter(i => i.age >= action.age);
        default:
            throw new Error("I don't understand this type")
    }
};