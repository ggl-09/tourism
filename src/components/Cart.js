import { LanguageContext } from "../context/LangCont";
import { texts } from "../data/texts"
import {useContext} from "react";

function Cart({ cart, removeItem }) {
    const { lang } = useContext(LanguageContext);
    const t = texts[lang];

    return (
        <section id="plan" className="plan">
            <h2>{t.plan}</h2>

            {cart.length === 0 ? (
                <p>{t.emptyCart}</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item, i) => (
                        <li key={i} className="cart-item">
                            <span>{item}</span>
                            <button
                                className="delete-btn"
                                onClick={() => removeItem(i)}
                            >
                                &times;
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Cart;