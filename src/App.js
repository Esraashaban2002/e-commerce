import Footer from "./components/utils/footer/Footer";
import Header from "./components/utils/header/Header";
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ContactPage from "./components/contact/ContactPage";
import AboutPage from "./components/About/AboutPage";
import { Container } from "react-bootstrap";
import { ProfileLayout } from "./components/Account/ProfileLayout";
import ErrorPage from "./components/404Error/ErrorPage";
import CartPage from "./components/Card/CartPage";
import { WishlistPage } from "./components/Wishlist/WishlistPage";
import { CheckoutPage } from "./components/CheckOut/CheckoutPage";
import ProductDetailsPage from "./components/Product Details page/ProductDetailsPage";

export const  BreadcrumbItems = [
  {path:'/' , label:'Home'  },
  {path:'/about' , label:'About' },
  {path:'/contact' , label:'Contact '},
  {path:'/account' , label:'My Account' },
  {path:'/wishlist' , label:'Wishlist '}
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route  path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/account" element={<ProfileLayout/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/card" element={<CartPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/details" element={<ProductDetailsPage/>} />

        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


