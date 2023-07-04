import React from 'react';
import Navbar from '../features/navbar/Navbar';
import Header from '../features/Header/Header';
import ProductList from '../features/product/components/ProductList';

function Home(props) {
    return (
        <>
         <Navbar/>
        <Header/>
       <ProductList/>
        </>
   
    );
}

export default Home;