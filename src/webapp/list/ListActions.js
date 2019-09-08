const addItem = (item) => ({
    type: 'LIST_ADD_ITEM',
    item,
});

const removeItem = (idx) => ({
    type: 'LIST_REMOVE_ITEM',
    idx,
});

export default {
    addItem,
    removeItem,
};
