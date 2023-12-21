import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '491y932m',
    dataset: 'production',
    apiVersion:'2023-12-20',
    useCdn: true,
    token:process.env.SANITY_API_TOKEN,
})




const builder = imageUrlBuilder(client)

export const  urlFor = (source) => {
  return builder.image(source)
}