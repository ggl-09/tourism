import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MediaSection from "./components/MediaSection";
import Activities from "./components/Activities";
import Places from "./components/Places";
import Cart from "./components/Cart";
import PlaceDetail from "./components/PlaceDetail";
import ActivityDetail from "./components/ActivityDetail";
import Footer from "./components/Footer"
import Stays from "./components/Stays";

function App() {
    const [cart, setCart] = useState([]);

    function addItem(item) {
        if (!cart.includes(item)) {
            setCart([...cart, item]);
        }
    }

    function removeItem(item) {
        setCart(cart.filter((_, index) => index !== item));
    }

    return (
        <>
            <Menu />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <MediaSection />
                            <Activities addItem={addItem} />
                            <Places addItem={addItem} />
                            <Stays addItem={addItem} />
                            <Cart cart={cart} removeItem={removeItem} />
                        </>
                    }
                />

                <Route
                    path="/places/:id"
                    element={<PlaceDetail addItem={addItem} />}
                />

                <Route
                    path="/activities/:id"
                    element={<ActivityDetail addItem={addItem} />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
