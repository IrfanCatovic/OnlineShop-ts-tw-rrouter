export type Product = {
    id: string
  name: string
  price: number
  image: string
}

export const initialProducts: Product[] = [
    {
    id: "1",
    name: "Marciano - Braon ženski mantil",
    price: 43.190,
    image: "/images/mantil.jpg",
  },
  {
    id: "2",
    name: "BOSS - Bela ženska jakna",
    price: 72.990,
    image: "/images/jakna.jpg",
  },
  {
    id: "3",
    name: "Marciano - Crne ženske cipele",
    price: 31.190,
    image: "/images/cipela.jpg",
  },
  {
    id: "4",
    name: "Emporio Armani - Kožne ženske čizme",
    price: 87.990,
    image: "/images/cizma.jpg",
  }
]