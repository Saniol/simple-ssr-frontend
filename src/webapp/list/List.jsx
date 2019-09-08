import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../form/Form.jsx';
import Item from './Item.jsx';
import { getStateRoot } from './listReducer';

const List = () => {
    const items = useSelector(getStateRoot);

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
