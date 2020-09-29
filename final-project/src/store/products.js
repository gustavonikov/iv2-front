const initialState = [];

export const actions = {
    add: (product) => ({
        payload: product,
        type: "ADD_PRODUCT",
    }),
    postProduct: (product) => ({
        payload: product,
        type: "POST_PRODUCT",
    }),
    edit: (product) => ({
        payload: product,
        type: 'EDIT_PRODUCT',
    }),
    getAllProducts: (products) => ({
        payload: products,
        type: 'GET_ALL_PRODUCTS',
    }),
    withdraw: (product) => ({
        payload: product,
        type: "WITHDRAW_PRODUCT",
    }),
    delete: (item) => ({
        payload: item,
        type: "DELETE_ITEM"
    })
}

function productsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'ADD_PRODUCT':
            return [...state, payload];
        case 'POST_PRODUCT':
            return [...state, payload];
        case 'EDIT_PRODUCT':
            return state.map((item) => {
                if (item.name === payload.name) {
                    return {
                        ...item, 
                        amount: payload.amount
                    }
                }
                return item;
            });

        case 'GET_ALL_PRODUCTS':
            return [...payload];
        case 'WITHDRAW_PRODUCT':
            return state.map((item) => {
                if (item.name === payload.name) {
                    return {
                        ...item, 
                        amount: payload.amount
                    }
                }
                return item;
            });
            
        case 'DELETE_ITEM':
            return state.filter((item) => item.id !== payload.id);
        default:
            return state;
    }
}

export default productsReducer;
