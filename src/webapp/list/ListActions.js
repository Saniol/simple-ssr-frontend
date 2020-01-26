import { getStateRoot } from './listReducer';

const fetch = typeof window !== 'undefined' ? window.fetch : global.fetch;

const apiUrl = 'http://localhost:3000/api/items';

const addItem = (item) => ({
    type: 'LIST_ADD_ITEM',
    item,
});

const addMultipleItems = (items) => ({
    type: 'LIST_ADD_MULTIPLE_ITEMS',
    items,
});

const removeItem = (idx) => ({
    type: 'LIST_REMOVE_ITEM',
    idx,
});

const createItem = (item) => (
    async (dispatch, getState) => {
        dispatch(addItem(item));

        try {
            const response = await fetch(apiUrl, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });

            if (response.status !== 200) {
                throw new Error('Could\'t save item to server!');
            }
        } catch (err) {
            console.error(err);

            const stateRoot = getStateRoot(getState());
            const itemIdx = stateRoot.findIndex(
                (i) => i.name === item.name,
            );

            dispatch(removeItem(itemIdx));
        }
    }
);

const eraseItem = (itemIdx) => (
    async (dispatch) => {
        dispatch(removeItem(itemIdx));

        try {
            const response = await fetch(`${apiUrl}/${itemIdx}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status !== 200) {
                throw new Error('Could\'t delete item on server!');
            }
        } catch (err) {
            console.error(err);
        }
    }
);

const loadItems = () => (
    async (dispatch) => {
        try {
            const response = await fetch(apiUrl, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status !== 200) {
                throw new Error('Could\'t load items from server!');
            }

            const items = await response.json();

            dispatch(addMultipleItems(items));
        } catch (err) {
            console.error(err);
        }
    }
);

export default {
    addItem,
    addMultipleItems,
    removeItem,
    createItem,
    eraseItem,
    loadItems,
};
