export const addItemToCart = (items, newItem) => {
    const itemExist = items.find(item => item.id === newItem.id);

    if (itemExist) {
        return items.map((item) =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        )
    }

    return [...items, { ...newItem, quantity: 1 }]
}

const updateQuantityCartItem = (items, itemUpdate, changedNumber) => {
    // check if itemUpdate is existed
    const existedItem = items.find(item => item.id === itemUpdate.id);
    if (!existedItem) {
        return items;
    }

    if (existedItem.quantity + changedNumber <= 0) {
        return items.filter(item => item.id !== itemUpdate.id); //deleted from items
    }

    // update quantity
    return items.map(item => item.id !== itemUpdate.id ? { ...item } : { ...item, quantity: item.quantity + changedNumber });
}

export const increateItem = (items, itemUpdate) => {
    return updateQuantityCartItem(items, itemUpdate, 1);
}

export const decreaseItem = (items, itemUpdate) => {
    return updateQuantityCartItem(items, itemUpdate, -1);
}
