import { useRouter } from "next/router";
import Head from "next/head";

export default function({product}) {
  const {query} = useRouter();
  return (
    <>
      <Head>
        <title>Next Shop | {product.title}</title>
      </Head>
      <h3>Product code: {query.id}</h3>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <img src={product.image} style={{width: '400px'}}/>
      <p>Price: {product.price}$</p>
    </>
  )
} 

export async function getServerSideProps({params}) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await response.json();
  return {
    props: {product},
  }
}