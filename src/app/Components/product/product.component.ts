import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../Model/iproduct';
import { Store } from '../../Model/store';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DirectiveCardDirective } from '../../Directives/directive-card.directive';
import { CustomPipePipe } from '../../pipe/custom-pipe.pipe';
import { ServiceProductService } from '../../Service/service-product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductWithApiService } from '../../Service/product-with-api.service';

@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule,DirectiveCardDirective,CustomPipePipe , RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  clientName:string="omar";
  store: Store = new Store( 'https://th.bing.com/th/id/OIP.Bzz7HKbT66HZ3ql6AZE8eAHaHa?rs=1&pid=ImgDetMain');
  showImgFlag: boolean = false;
  toggleImg() {
    this.showImgFlag = !this.showImgFlag;
  }
  products: Iproduct[] = [];
  categoryID: string | null = null;
  // productsList: Iproduct[];
  // filteredList: Iproduct[]=[];
  constructor(   private route: ActivatedRoute, private activatedRoute: ActivatedRoute, public productService:ServiceProductService , private router:Router , private productWithApi:ProductWithApiService) {


    // this.productsList = [
    //   {
    //     id: 1,
    //     name: 'Odense 8-Seater Top Dining Table',
    //     price: 21500,
    //     quantity: 0,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Engineered Wood',
    //     purchaseDate: new Date('2024-02-01')
    //   },
    //   {
    //     id: 5,
    //     name: 'Trixia 4-Seater Glass Top Dining Table',
    //     price: 30000,
    //     quantity: 8,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //     purchaseDate: new Date('2024-03-01')
    //   },
    //   {
    //     id: 25,
    //     name: 'Gasha Marble Top Side Table',
    //     price: 14000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //     purchaseDate: new Date('2024-04-01')
    //   },
    //   {
    //     id: 7,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //     purchaseDate: new Date('2024-05-01')
    //   },
    //   {
    //     id: 17,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 1,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //     purchaseDate: new Date('2024-06-01')
    //   },
    //   {
    //     id: 9,
    //     name: 'Boston Study Chair',
    //     price: 1000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //     purchaseDate: new Date('2024-07-01')
    //   },
    //   {
    //     id: 10,
    //     name: 'Coby Extendable TV Unit',
    //     price: 13000,
    //     quantity: 0,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'Wood',
    //     purchaseDate: new Date('2024-08-01')
    //   },
    //   {
    //     id: 15,
    //     name: 'Accent TV Unit',
    //     price: 36999,
    //     quantity: 1,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'MDF',
    //     purchaseDate: new Date('2024-09-01')
    //   },
    //   {
    //     id: 55,
    //     name: 'Plymouth TV Unit',
    //     price: 36999,
    //     quantity: 3,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'wood',
    //     purchaseDate: new Date('2024-10-01')
    //   },
    // ];
    // this.filteredList = this.productsList;
  }

  ngOnInit(): void {
    // this.filteredList = this.productsList;

    // Day4
    // this.filteredList=this.productService.getAllProducts();
    //Day6
    this.productWithApi.getAllProducts().subscribe({
      next:(data)=>{
        // console.log(data);
        this.filteredList=data;

      },error:(err)=>{
        console.log(err);

      }
    })



  }



  // Fetch products filtered by category ID




  selectedCategory: number = 0;

  set selectValue(value: number) {
    console.log(value);

    this.selectedCategory = value;
    this.filteredList = this.productService.filteredProducts(value);
    // console.log(this.filteredProducts(value));

  }

  // filteredProducts(val: number): Iproduct[] {

  //   return val == 0
  //     ? this.productsList
  //     : this.productsList.filter(product => product.categoryID == val);
  // }

  // buyProduct(product: Iproduct) {
  //   if (product.quantity > 0) {
  //     product.quantity -= 1;
  //   }
  // }


  // day3

  filteredList: Iproduct[] = [];
  @Input() set filterPriceInChild(value: number) {
    // this.filteredList = this.filterByPrice(value);
    // console.log(this.filteredList);
    // console.log(this.filterByPrice(value));
    this.filteredList = this.productService.filterByPrice(value);
    //Day6

this.productWithApi.getAllProducts().subscribe(data=>{
  this.filteredList=data.filter((prd:Iproduct)=>prd.price==value)
})


  }

  // filterByPrice(maxPrice: number): Iproduct[] {
  //   return maxPrice == 0
  //   ? this.productsList
  //   :     this.productsList.filter(product => product.price == maxPrice);


  // }

  // @Output() addToCartEvent=new EventEmitter<Iproduct>();
  // addtocart(item: Iproduct) {
  //   console.log(item);
  //   this.addToCartEvent.emit(item);
  // }


  @Output() addToCartEvent = new EventEmitter<{ product: Iproduct, count: number }>();

  cartCounter: { [productId: number]: number } = {};

  // addtocart(item: Iproduct) {
  //   if (!this.cartCounter[item.id]) {
  //     this.cartCounter[item.id] = 1;
  //   } else {
  //     this.cartCounter[item.id] += 1;
  //   }


  //   this.addToCartEvent.emit({ product: item, count: this.cartCounter[item.id] });
  // }
  buyProduct(product: Iproduct) {
    this.productService.buyProduct(product);
  }

  addtocart(item: Iproduct) {
    const cartItem = this.productService.addToCart(this.cartCounter, item);
    this.addToCartEvent.emit(cartItem);
  }

  creditCardNumber: string = '';



  getDetails(prdid:number) {

    this.router.navigate(['/product',prdid])
  }
}
