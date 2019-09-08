import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormActions from './FormActions';
import { getStateRoot } from './formReducer';

const Form = () => {
    const data = useSelector(getStateRoot);
    const dispatch = useDispatch();
    const setName = useCallback(
        (evt) => dispatch(FormActions.setName(evt.target.value)),
        [dispatch],
    );
    const confirm = useCallback(
        () => dispatch(FormActions.confirmForm()),
        [dispatch],
    );
    const confirmOnEnterKey = (evt) => {
        if (evt.keyCode === 13) {
            confirm();
        }
    };

    return (
        <form>
            <label htmlFor="name">
                Name:
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.get('name')}
                    onChange={setName}
                    maxLength="128"
                />
            </label>
            <button type="button" onClick={confirm} onKeyUp={confirmOnEnterKey}>Save</button>
        </form>
    );
};

export default Form;
