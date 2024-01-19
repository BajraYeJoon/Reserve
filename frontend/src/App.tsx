import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import BookRoom from "./features/BookRoom";
import Layout from "./screen/Layout/Layout";
import Dashboard from "./screen/Dashboard/Dashboard";
import Cart from "./features/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/rooms/:id" element={<BookRoom />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
