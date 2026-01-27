

import productsData from '../data/products.json';

export async function getStorage() {

  await new Promise(resolve => setTimeout(resolve, 300));


  return productsData;
}