import * as types from '../actions/types';

const clone = (item) => JSON.parse(JSON.stringify(item)); // eslint-disable-line

const initState = { counter: 0 };

export default function settings(state = initState, action) {
    switch (action.type) {
    case types.COUNTER_UP:
        return { ...state, counter: action.counter + 1};
    default:
        return state;
    }
}
