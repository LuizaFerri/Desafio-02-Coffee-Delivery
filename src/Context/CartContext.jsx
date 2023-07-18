import { createContext, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";
import {
  addToCart,
  removeFromCart,
  adjustQuantity,
  setAddress,
  setPaymentMethod,
} from "../actions/cartActions";

export const CartContext = createContext();

const initialState = {
  cart: [],
  address: {
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  },
  paymentMethod: "",
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart: (produto, quantidade) =>
          dispatch(addToCart(produto, quantidade)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQuantity: (productId, quantity) =>
          dispatch(adjustQuantity(productId, quantity)),
        address: state.address,
        setAddress: (address) => dispatch(setAddress(address)),
        paymentMethod: state.paymentMethod,
        setPaymentMethod: (paymentMethod) =>
          dispatch(setPaymentMethod(paymentMethod)),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
