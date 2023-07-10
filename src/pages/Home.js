import React from 'react';
import Navbar from '../features/navbar/Navbar';
import Header from '../features/Header/Header';
import ProductList from '../features/product/components/ProductList';
import PreviewProduct from '../features/product/components/PreviewProduct';

function Home(props) {
    return (
        <>
         <Navbar/>
        <Header/>
        <PreviewProduct/>
       <ProductList/>
        </>
   
    );
}

export default Home;