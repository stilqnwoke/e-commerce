export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);


export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket

            // clone the basket
            let newBasket = [...state.basket];

            // we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exists, so we remove it with splice
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product (id :${action.id} as its not in the basket.)`
                );

            }

            return {
                ...state,
                basket: newBasket
            };

        default:
            return state;
    }
}

export default reducer;