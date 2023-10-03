interface DataType {
  image: string
  name: string
  rate: string
  price: number
}
interface ListType {
    image: string,
    name: string,
    qty: number,
}
export const details: DataType[] = [
  {
    image:
      'https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/mcd_pakistan/7713aadf60f771276115a9c58d0a090b.png?width=%s',
    name: 'Mcdonalds - Dubai',
    rate: '⭐⭐⭐⭐⭐',
    price: 87.99,
  },
  {
    image:
      'https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/mcd_pakistan/7713aadf60f771276115a9c58d0a090b.png?width=%s',
    name: 'Mcdonalds - Italy',
    rate: '⭐⭐⭐⭐⭐',
    price: 77.99,
  },
  {
    image:
      'https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/mcd_pakistan/7713aadf60f771276115a9c58d0a090b.png?width=%s',
    name: 'Mcdonalds - Italy',
    rate: '⭐⭐⭐⭐⭐',
    price: 77.99,
  },
  {
    image:
      'https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/mcd_pakistan/7713aadf60f771276115a9c58d0a090b.png?width=%s',
    name: 'Mcdonalds - Italy',
    rate: '⭐⭐⭐⭐⭐',
    price: 77.99,
  },
]
export const lists: ListType[] = [
    {
        image: 'https://www.svgrepo.com/show/384981/hamburger-burger-fastfood-food-emoj-symbol.svg',
        name: 'McDonalds Burger',
        qty: 2,
    },
    {
        image: 'https://www.svgrepo.com/show/475563/drinks.svg',
        name: 'Hard Drinks - 250ml',
        qty: 1,
    },
    {
        image: 'https://www.svgrepo.com/show/356679/french-fries.svg',
        name: 'French Fries - Regular',
        qty: 1,
    },
]