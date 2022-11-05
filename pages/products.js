import { useState } from "react";
import Link from "next/link";
import MainConteiner from "../components/MainConteiner";
import Search from "../components/Search";

const Products = ({products}) => {
  const [search, setSearch] = useState('');
  const getSearchVal = (value) => setSearch(value);
  const filteredProducts = products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  
  return(
    <MainConteiner title='Next Shop | Products'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>
          Products
        </h1>
          <Search value={getSearchVal}/>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {filteredProducts.map(product => 
          <div key={product.id} style={{margin: '30px', width: '300px', border: '1px solid #eee', padding: '10px'}}>
            <Link href={`./products/${product.id}`} style={{textDecoration: 'none'}}>
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