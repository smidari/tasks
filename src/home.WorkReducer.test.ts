import {hwReducer} from "./homeWorkReducer";

test('user reducer should will return sorted by name by ascending array of people', () => {
    const startState = [
        {id: '1', name: 'Dasha', age: 18},
        {id: '2', name: 'Anna', age: 19},
        {id: '3', name: 'Rita', age: 20}
    ];
    const result = [
        {id: '2', name: 'Anna', age: 19},
        {id: '1', name: 'Dasha', age: 18},
        {id: '3', name: 'Rita', age: 20}
    ];
    const endState = hwReducer(startState, {type: 'SORT', sort: 'up'});
    expect(endState).toEqual(result);
});

test('user reducer should will return an array sorted in reverse order', () => {
    const startState = [
        {id: '1', name: 'Dasha', age: 18},
        {id: '2', name: 'Anna', age: 19},
        {id: '3', name: 'Rita', age: 20}
    ];
    const result = [
        {id: '3', name: 'Rita', age: 20},
        {id: '1', name: 'Dasha', age: 18},
        {id: '2', name: 'Anna', age: 19}
    ];
    const endState = hwReducer(startState, {type: 'SORT', sort: 'down'});
    expect(endState).toEqual(result);
});

test('user reducer should will return an array of people who have turned 18', () => {
    const startState = [
        {id: '1', name: 'Dasha', age: 8},
        {id: '2', name: 'Anna', age: 19},
        {id: '3', name: 'Rita', age: 20}
    ];
    const result = [
        {id: '2', name: 'Anna', age: 19},
        {id: '3', name: 'Rita', age: 20}
    ];
    const endState = hwReducer(startState, {type: 'CHECK', age: 18});
    expect(endState).toEqual(result);
});
