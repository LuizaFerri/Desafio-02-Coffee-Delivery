const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const itemExistente = state.cart.find((item) => item.produto.id === action.produto.id)
            if (itemExistente) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.produto.id === action.produto.id
                            ? { ...item, quantidade: item.quantidade + action.quantidade }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { produto: action.produto, quantidade: action.quantidade }],
                };
            }
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.produto.id !== action.id),
            };
        case 'ADJUST_QUANTITY':
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.produto.id === action.productId
                        ? { ...item, quantidade: action.quantity }
                        : item
                ),
            };
        case 'SET_ADDRESS':
            return {
                ...state,
                address: action.address,
            };

        case 'SET_PAYMENT_METHOD':
            return {
                ...state,
                paymentMethod: action.paymentMethod,
            };

        default:
            return state;
    }
};

export default cartReducer;