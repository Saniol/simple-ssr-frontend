import Immutable from 'immutable';

export const getStateRoot = (state) => state.form;

const initState = Immutable.Map({
    name: '',
});

const setName = (action, state) => (
    state.set('name', action.value || '')
);

export const formReducer = (state = initState, action) => {
    const { type } = action;

    switch (type) {
    case 'FORM_SET_NAME':
        return setName(action, state);
    default:
        return state;
    }
};
