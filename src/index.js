import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LangCont";

import App from "./App";
import "./App.css";
import * as root from "@testing-library/react";

root.render(
    <BrowserRouter>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </BrowserRouter>
);
