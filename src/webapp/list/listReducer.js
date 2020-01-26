import Immutable from 'immutable';

export const getStateRoot = (state) => state.list;

const initState = Immutable.List();

const restoreFromJSON = (state) => Immutable.fromJS(state);

const addItem = (action, state) => {
    if (!action.item) {
        // eslint-disable-next-line no-console
        console.error('invalid action - item can\'t be null');
        return state;
    }

    return state.push(Immutable.Map(action.item));
};

const addMultipleItems = (action, state) => {
    if (!Array.isArray(action.items)) {
        // eslint-disable-next-line no-console
        console.error('invalid action - items should be an array');
        return state;
    }

    return state.merge(Immutable.fromJS(action.items));
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

    if (!Immutable.isList(state)) {
        return restoreFromJSON(state);
    }

    switch (type) {
    case 'LIST_ADD_ITEM':
        return addItem(action, state);
    case 'LIST_ADD_MULTIPLE_ITEMS':
        return addMultipleItems(action, state);
    case 'LIST_REMOVE_ITEM':
        return removeItem(action, state);
    default:
        return state;
    }
};
