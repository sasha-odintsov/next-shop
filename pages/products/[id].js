import { useRouter } from "next/router";
import MainConteiner from "../../components/MainConteiner";

export default function({product}) {
  const {query} = useRouter();
  return (
    <MainConteiner title={product.title}>
      <h3>Product code: {query.id}</h3>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <img src={product.image} style={{width: '400px'}}/>
      <p>Price: {product.price}$</p>
    </MainConteiner>
  )
} 

export async function getServerSideProps({params}) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await response.json();
  return {
    props: {product},
  }
}