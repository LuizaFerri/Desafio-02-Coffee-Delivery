import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [address, setAddress] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const addToCart = (produto, quantidade) => {
    const itemExistente = cart.find((item) => item.id === produto.id);

    if (itemExistente) {
      setCart(
        cart.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        )
      );
    } else {
      setCart([...cart, { produto, quantidade }]);
    }
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.produto.id !== id)
    );
  };

  const adjustQuantity = (productId, quantity) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        adjustQuantity,
        address,
        setAddress,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
