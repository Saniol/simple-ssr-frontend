import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../form/Form.jsx';
import Item from './Item.jsx';
import ListActions from './ListActions';
import { getStateRoot } from './listReducer';

const List = () => {
    const items = useSelector(getStateRoot);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ListActions.loadItems());
    }, [dispatch]);

    return (
        <main>
            <Form />
            <ul>
                {items.map((item, idx) => (
                    <Item
                        item={item}
                        idx={idx}
                        key={item.get('name')}
                    />
                ))}
            </ul>
            <p>
                <Link to="/">Go back</Link>
            </p>
        </main>
    );
};

export default List;
