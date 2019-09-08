import { combineReducers } from 'redux';
import { listReducer } from './list/listReducer';
import { formReducer } from './form/formReducer';

export default combineReducers({
    list: listReducer,
    form: formReducer,
});
