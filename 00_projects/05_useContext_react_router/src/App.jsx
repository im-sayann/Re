import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home, Navigation, Order, NoPage, New, Featured, Products, Users, UserDetails, Admin, FeaturedItem, Profile, Login,
} from "./components/index";

import { lazy, Suspense } from "react";
import { AuthProvider } from "./utils/Auth";
import RequireAuth from "./components/authentication/RequireAuth";
import CartAdded from "./components/products/CartAdded";
import { CartProvider } from "./utils/UseCart";
const LazyAbout = lazy(() => import("./components/About"));

function App() {
  return (
    <div className="bg-zinc-900 text-white font-sans w-full min-h-screen">
      <AuthProvider>
        <CartProvider>
        <Navigation />
        <Routes>

          {/* Home and about pages */}
            <Route path="/" element={<Home />} /> {/* Default home page */}
            {/* Lazy loaded component */}
            <Route path="about" 
              element={
                <Suspense fallback="Loading...">
                  <LazyAbout />
                </Suspense> 
              } />

            <Route path="order-confirmed" element={<Order />} />

              {/* product Routes  */}
            <Route path="products" element={<Products />}>
              <Route index element={<Featured />} /> {/* default child in products */}
              <Route path="new" element={<New />} />
              <Route path="featured" element={<Featured />}/>
              <Route path="featured/featured-item1" element={<FeaturedItem />} />
            </Route>
            <Route path="cart-added" element={<CartAdded/>}/>

              {/* user Routes */}
            <Route path="users" element={<Users />}>
              <Route path=":id" element={<UserDetails />} /> {/* dynamic route */}
              <Route path="admin" element={<Admin />} />
            </Route> 

              {/* Authentication */}
            <Route path="profile" 
                  element={
                    <RequireAuth>
                      <Profile />
                    </RequireAuth>
                  } />
            <Route path="login" element={<Login/>}/>


            {/* If no path is matched */}
            <Route path="*" element={<NoPage />} /> 

        </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
