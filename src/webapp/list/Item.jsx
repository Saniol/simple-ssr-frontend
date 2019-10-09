import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Immutable from 'immutable';
import ListActions from './ListActions';

const Item = (props) => {
    const { idx, item } = props;
    const dispatch = useDispatch();
    const remove = useCallback(
        () => dispatch(ListActions.eraseItem(idx)),
        [dispatch, idx],
    );
    const removeOnEnterKey = (evt) => {
        if (evt.keyCode === 13) {
            remove();
        }
    };

    return (
        <li>
            <span>{item.get('name')}</span>
            <button type="button" onClick={remove} onKeyUp={removeOnEnterKey}>Remove</button>
        </li>
    );
};

Item.propTypes = {
    item: PropTypes.instanceOf(Immutable.Map).isRequired,
    idx: PropTypes.number.isRequired,
};

export default Item;
