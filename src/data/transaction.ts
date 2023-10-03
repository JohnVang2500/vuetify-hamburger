interface DataType {
    image: string,
    name: string,
    text: string
}

export const transactions : DataType[] = [
    {
        image: 'https://www.svgrepo.com/show/34035/credit-cards.svg',
        name: 'Accept Cards',
        text: 'Cards accepted on delivery restaurant for delivery.'
    },
    {
        image: 'https://www.svgrepo.com/show/530161/check-in.svg',
        name: 'Online Booking',
        text: 'We have space at the time we wish to book.'
    },
    {
        image: 'https://www.svgrepo.com/show/207660/delivery-truck-truck.svg',
        name: 'Home Delivery',
        text: 'You are welcome to feel a good coffee ever.'
    },
    {
        image: 'https://www.svgrepo.com/show/433956/location.svg',
        name: 'Best Location',
        text: 'Using locally source we provide a healthy fast food.'
    },
]