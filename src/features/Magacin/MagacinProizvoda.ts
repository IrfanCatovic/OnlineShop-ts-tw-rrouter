export type Product = {
    id: string
  name: string
  price: number
  type: string
  image: string
}

export const initialProducts: Product[] = [
    {
    id: "1",
    name: "Marciano - Braon ženski mantil",
    price: 43.190,
    type: "clothes",
    image: "/mantil.jpg",
  },
  {
    id: "2",
    name: "BOSS - Bela ženska jakna",
    price: 72.990,
    type: "clothes",
    image: "/jakna.jpg",
  },
  {
    id: "3",
    name: "Marciano - Crne ženske cipele",
    price: 31.190,
    type: "shoes",
    image: "/cipela.jpg",
  },
  {
    id: "4",
    name: "Emporio Armani - Kožne ženske čizme",
    price: 87.990,
    type: "shoes",
    image: "cizma.jpg",
  }
]