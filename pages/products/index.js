import { useState } from "react";
import Link from "next/link";
import Search from "../../components/Search";

const Products = ({ products }) => {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(
    (item) => item.title.toLowerCase().includes(search.toLowerCase()));
  
  return(
    <div>
      <div className="flex justify-between items-center my-10">
        <h1 className="font-medium">
          Products
        </h1>
        <Search onChange={(value) => setSearch(value)}/>
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-7 w-[95%] mx-auto">
        {filteredProducts.map((product) => 
          <Link 
            key={product.id} 
            href={`./products/${product.id}`} 
            className="flex flex-col justify-between h-full border rounded p-3 hover:shadow"
          >
            <div className="my-4">
              <img src={product.image} className="mx-auto h-28"/>
              <p className="text-sm text-cyan-700 mt-3 line-clamp-2 font-medium">{product.title}</p>
            </div>
            <p className="text-end">Price: {product.price}$</p>    
          </Link>  
        )}
      </div>
    </div>
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