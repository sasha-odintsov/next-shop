import { useRouter } from "next/router";
import MainConteiner from "../../components/MainConteiner";

export default function({product}) {
  const {query} = useRouter();
  return (
    <MainConteiner title={product.title}>
      <h1>Product id - {query.id}</h1>
      <p>{product.title}</p>
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