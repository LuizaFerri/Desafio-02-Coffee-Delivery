import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { DefaultLayout } from "./layouts/DefautLayout";
import { Cart } from "./components/Cart";
import { SuccessPage } from "./components/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}
