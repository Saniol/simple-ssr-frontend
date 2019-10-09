import ListActions from '../list/ListActions';
import { getStateRoot } from './formReducer';

const setName = (value) => ({
    type: 'FORM_SET_NAME',
    value,
});

const confirmForm = () => (dispatch, getState) => {
    const formState = getStateRoot(getState());

    dispatch(
        ListActions.createItem({
            name: formState.get('name'),
        }),
    );
    dispatch(
        setName(''),
    );
};

export default {
    setName,
    confirmForm,
};
