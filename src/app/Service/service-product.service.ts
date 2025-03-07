import { Injectable } from '@angular/core';
import { Iproduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  productsList: Iproduct[];
  constructor() {  this.productsList = [
    {
      id: 1,
      name: 'Odense 8-Seater Top Dining Table',
      price: 21500,
      quantity: 0,
      PrdimgURL:
        'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      categoryID: 1,
      Material: 'Engineered Wood',
      purchaseDate: new Date('2024-02-01')
    },
    {
      id: 5,
      name: 'Trixia 4-Seater Glass Top Dining Table',
      price: 30000,
      quantity: 8,
      PrdimgURL:
        'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      categoryID: 1,
      Material: 'Metal',
      purchaseDate: new Date('2024-03-01')
    },
    {
      id: 25,
      name: 'Gasha Marble Top Side Table',
      price: 14000,
      quantity: 10,
      PrdimgURL:
        'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      categoryID: 1,
      Material: 'Metal',
      purchaseDate: new Date('2024-04-01')
    },
    {
      id: 7,
      name: 'Ventura Fabric Dining Chair',
      price: 1500,
      quantity: 2,
      PrdimgURL:
        'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      categoryID: 2,
      Material: 'Upholstered Seating',
      purchaseDate: new Date('2024-05-01')
    },
    {
      id: 17,
      name: 'Ventura Fabric Dining Chair',
      price: 1500,
      quantity: 1,
      PrdimgURL:
        'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      categoryID: 2,
      Material: 'Upholstered Seating',
      purchaseDate: new Date('2024-06-01')
    },
    {
      id: 9,
      name: 'Boston Study Chair',
      price: 1000,
      quantity: 10,
      PrdimgURL:
        'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      categoryID: 2,
      Material: 'Upholstered Seating',
      purchaseDate: new Date('2024-07-01')
    },
    {
      id: 10,
      name: 'Coby Extendable TV Unit',
      price: 13000,
      quantity: 0,
      PrdimgURL:
        'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      categoryID: 3,
      Material: 'Wood',
      purchaseDate: new Date('2024-08-01')
    },
    {
      id: 15,
      name: 'Accent TV Unit',
      price: 36999,
      quantity: 1,
      PrdimgURL:
        'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      categoryID: 3,
      Material: 'MDF',
      purchaseDate: new Date('2024-09-01')
    },
    {
      id: 55,
      name: 'Plymouth TV Unit',
      price: 36999,
      quantity: 3,
      PrdimgURL:
        'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      categoryID: 3,
      Material: 'wood',
      purchaseDate: new Date('2024-10-01')
    },
  ];}


  getAllProducts() {
    return this.productsList;
  }

  //filtter by price
  filterByPrice(maxPrice: number): Iproduct[] {
    return maxPrice == 0
    ? this.productsList
    :     this.productsList.filter(product => product.price == maxPrice);


  }


// selector
  filteredProducts(val: number): Iproduct[] {

    return val == 0
      ? this.productsList
      : this.productsList.filter(product => product.categoryID == val);
  }

  //find details by id
  getPrdDetailsById(prdID: number): Iproduct | undefined {
    return this.productsList.find((prd) => prd.id == prdID);
  }

/////
buyProduct(product: Iproduct) {
  if (product.quantity > 0) {
    product.quantity -= 1;
  }
}

addToCart(cartCounter: { [productId: number]: number }, item: Iproduct) {
  if (!cartCounter[item.id]) {
    cartCounter[item.id] = 1;
  } else {
    cartCounter[item.id] += 1;
  }
  return { product: item, count: cartCounter[item.id] };
}



//Day 5
getIDSProduct():number[]{
return this.productsList.map((prd)=>prd.id);
}
}
