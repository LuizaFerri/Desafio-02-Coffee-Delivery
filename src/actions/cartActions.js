export const addToCart = (produto, quantidade) => ({ type: 'ADD_TO_CART', produto, quantidade });

export const removeFromCart = (id) => ({ type: 'REMOVE_FROM_CART', id });

export const adjustQuantity = (productId, quantity) => ({ type: 'ADJUST_QUANTITY', productId, quantity });

export const setAddress = (address) => ({ type: 'SET_ADDRESS', address });

export const setPaymentMethod = (paymentMethod) => ({ type: 'SET_PAYMENT_METHOD', paymentMethod });