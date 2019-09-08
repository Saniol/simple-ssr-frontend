import Immutable from 'immutable';

export const getStateRoot = (state) => state.list;

const initState = Immutable.List();

const addItem = (action, state) => {
    if (!action.item) {
        // eslint-disable-next-line no-console
        console.error('invalid action - item can\'t be null');
        return state;
    }

    return state.push(Immutable.Map(action.item));
};

const removeItem = (action, state) => {
    if (action.idx == null) {
        // eslint-disable-next-line no-console
        console.error('invalid action - idx can\'t be null');
        return state;
    }

    return state.delete(action.idx);
};

export const listReducer = (state = initState, action) => {
    const { type } = action;

    switch (type) {
    case 'LIST_ADD_ITEM':
        return addItem(action, state);
    case 'LIST_REMOVE_ITEM':
        return removeItem(action, state);
    default:
        return state;
    }
};
