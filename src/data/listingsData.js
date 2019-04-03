import uuid from "uuid";

const listingsData = [
  {
    id: uuid(),
    address: '2034 grand ave',
    city: 'Richmond',
    state: 'VA',
    rooms: 3,
    baths: 2,
    price: 300000,
    floorSpace: 2000,
    homeType: 'Single-Family',
    image: 'https://cdn.houseplans.com/product/pn30jpt49kjn2909u9v0o977hm/w300x200.jpg?v=4'
  },
  {
    id: uuid(),
    address: '12 main st',
    city: 'Dulles',
    state: 'VA',
    rooms: 3,
    baths: 2,
    price: 400000,
    floorSpace: 1600,
    homeType: 'Single-Family',
    image: 'https://cdn.houseplansservices.com/product/4f03m0oph5pv0l2k9cfn9etb19/w300x200.jpg?v=3'
  },
  {
    id: uuid(),
    address: '13 first way',
    city: 'Glen Burnie',
    state: 'MD',
    rooms: 5,
    baths: 3,
    price: 400000,
    floorSpace: 3200,
    homeType: 'Apartment',
    image: 'https://cdn.houseplans.com/product/anp0jnouo1dq3iohiutoid1qoi/w300x200.JPG?v=4'
  },
  {
    id: uuid(),
    address: '3098 terrace ct',
    city: 'Severn',
    state: 'MD',
    rooms: 4,
    baths: 2,
    price: 500000,
    floorSpace: 2200,
    homeType: 'Condo',
    image: 'https://i.ebayimg.com/images/g/aGsAAOSwmwtaS2HA/s-l300.jpg'
  },
  {
    id: uuid(),
    address: '14423 5th st',
    city: 'Laurel',
    state: 'MD',
    rooms: 3,
    baths: 2,
    price: 800000,
    floorSpace: 3000,
    homeType: 'Single-Family',
    image: 'https://escapefox.com/wp-content/uploads/2018/06/Locked-Modern-House-Escape-8.jpg'
  },
  {
    id: uuid(),
    address: '20 penn ct',
    city: 'Annapolis',
    state: 'MD',
    rooms: 5,
    baths: 3,
    price: 700000,
    floorSpace: 2300,
    homeType: 'Rancher',
    image: 'https://3q87le1gsko01ibim33e4wib-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/modern-house-tour-5138-glenmeadow--300x200.jpg'
  }
]

export default listingsData;