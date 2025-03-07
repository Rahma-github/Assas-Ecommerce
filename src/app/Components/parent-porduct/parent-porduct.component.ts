import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../Model/iproduct';
import { ProductWithApiService } from '../../Service/product-with-api.service';

@Component({
  selector: 'app-parent-porduct',
  imports: [ProductComponent,FormsModule],
  templateUrl: './parent-porduct.component.html',
  styleUrl: './parent-porduct.component.css'
})
export class ParentPorductComponent {

  filterPrice: number = 0;
  constructor(private productWithApi:ProductWithApiService){

  }

  // cart: Iproduct[] = [];
  // cartFunc(product: Iproduct) {
  //   this.cart.push(product);
  // }

  cartItems: { product: Iproduct, count: number }[] = [];

  fancCard(data: { product: Iproduct, count: number }) {
    let existingItem = this.cartItems.find(item => item.product.id === data.product.id);

    if (existingItem) {
      existingItem.count = data.count; // Update count
    } else {
      this.cartItems.push({ product: Object.assign({}, data.product), count: data.count });
    }
  }


  //Day6
  searchData:Iproduct[]=[];
  search(material: string){
    this.productWithApi.searchWithMaterial(material).subscribe({
      next:(data)=>{
        console.log(data);
this.searchData=data;

      }
    })
  }
}


