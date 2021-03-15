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
            return { state }
            break;
        default:
            return state;
    }
}

export default reducer;