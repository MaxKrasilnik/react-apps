import React from "react";
import './app.css';
import {Route, Routes } from 'react-router';
import {HomePage, CartPage} from '../pages';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} exact />
            <Route path="/cart" element={<CartPage/>} />
        </Routes>
    );
};

export default App;