// src/services/api.ts  (ili gde god da ti je getStorage funkcija)

import productsData from '../data/products.json';   // ← ovo je ključna linija

export async function getStorage() {
  // Simuliraj malo čekanje da izgleda kao pravi API (nije obavezno, ali je lepo)
  await new Promise(resolve => setTimeout(resolve, 300));

  // Vrati podatke iz lokalnog JSON fajla
  return productsData;
}