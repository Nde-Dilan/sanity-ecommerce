import { client } from '@/lib/client'
import { cache } from 'react'
 
//Get all the products and the banner images
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



export const getProductsAndProductBySlug = cache(async (slug) => {
  //Getting the current prop of the slug of a product
  const query = `*[_type == "product"] {
    slug{
      current
    }
  }`;
  const singleProductQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product" ]`;

  
    const products = await client.fetch(productsQuery);
    const singleProduct = await client.fetch(singleProductQuery);
    const productSlug = await client.fetch(query);

    const paths = productSlug.map((product) => ({
      params: { slug: product.slug.current },
    }));
    return {
      products,
      singleProduct,
      paths,
    }
})




