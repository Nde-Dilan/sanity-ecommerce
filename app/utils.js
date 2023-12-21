import { client } from '@/lib/client'
import { cache } from 'react'
 
export const getProducts = cache(async () => {
    const products = await client.fetch(`*[_type == "product"]`)
    const banner = await client.fetch(`*[_type == "banner"]`)
    return {
      props: {
        products,
        banner
      }
    }
})



export async function getProductAndSimilar(slug) {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug]`[0],
    { slug }
  );
  const similarProducts = await client.fetch(`*[_type == "product"]`);

  return { props: { product, similarProducts } };
}

