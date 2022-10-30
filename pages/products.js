import { useState } from "react";
import Link from "next/link";
import MainConteiner from "../components/MainConteiner";

const Products = ({products}) => {
  return(
    <MainConteiner title='Next Shop | Products'>
      <h1>
        Products
      </h1>
      {products.map(product => 
        <Link href={`./products/${product.id}`} key={product.id}>
          {product.title}
        </Link>        
      )}
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