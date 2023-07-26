import { fetchJson } from './api';

const CMS_URL = 'http://localhost:1337';

export interface Product {
  id: number;
  title: string;
  description: string;
}

export async function getProduct(id: string): Promise<Product> {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
}

export async function getProducts(): Promise<Product[]> {
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
}

function stripProduct(product: any): Product {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
  };
}
