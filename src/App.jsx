import {Cart, Home, Login, Product, ProductList, Register, Success} from "./pages/";
import {
    Route,
    Routes
} from "react-router-dom";
import {useSelector} from "react-redux";

const App = () => {
    const user = useSelector(state => state.user.currentUser);
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/products/:category" element={<ProductList/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/registration" element={<Register/>}/>
            {
                !user && <Route path="/login" element={<Login/>}/>
            }
            <Route path="*" element={<Home />}/>
        </Routes>
    );
};

export default App;