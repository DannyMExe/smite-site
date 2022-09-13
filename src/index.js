import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './store/index'
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from '../src/contexts/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </BrowserRouter>
    </Provider>
);
