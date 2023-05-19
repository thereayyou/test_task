import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./App";
import reportWebVitals from "./reportWebVitals";
import {ThemeProvider} from "./Context/ThemeProvider";
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import store from './redux/redux-store'
import {I18nextProvider, initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import enTranslations from './locals/en.json';
import ruTranslations from './locals/ru.json';

i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: true,
    resources: {
        ru: { translation: ruTranslations },
        en: { translation: enTranslations },
    },
});

const Global = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Arial', sans-serif;
      font-size: 18px;
    }
    
    @media screen and (min-width: 360px) {
      width: 100%;
    }
    
    @media screen and (min-width: 480px) {
      width: 100%;
    }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        resources: {
            ru: { translation: ruTranslations },
            en: { translation: enTranslations },
        },
    })
    .then(() => {
        // Render your app component here
        root.render(
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider>
                        <Global />
                        <App />
                    </ThemeProvider>
                </I18nextProvider>
            </Provider>
        );
    });

reportWebVitals();
