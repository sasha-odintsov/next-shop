import { useState } from "react";
import Link from "next/link";
import MainConteiner from "../components/MainConteiner";

const Products = ({products}) => {
  return(
    <MainConteiner title='Next Shop | Products'>
      <h1>
        Products
      </h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {products.map(product => 
          <div style={{margin: '30px', width: '300px', border: '1px solid #eee', padding: '10px'}}>
            <Link href={`./products/${product.id}`} key={product.id} style={{textDecoration: 'none'}}>
              {product.title}
            <div style={{width: '100px', margin: '10px auto'}}>
              <img src={product.image} style={{width: '100%'}}/>
            </div>      
            <p style={{textAlign: 'end'}}>Price: {product.price}$</p>
            </Link>  
          </div>
        )}
      </div>
    </MainConteiner>
  )
}
export default Products;

export async function getStaticProps(context) {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  return {
    props: {products},
  }
}