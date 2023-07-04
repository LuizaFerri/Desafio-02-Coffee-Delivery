import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
