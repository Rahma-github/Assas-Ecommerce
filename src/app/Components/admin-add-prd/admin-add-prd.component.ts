import { Component } from '@angular/core';
import { ProductWithApiService } from '../../Service/product-with-api.service';
import { Iproduct } from '../../Model/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-add-prd',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-add-prd.component.html',
  styleUrl: './admin-add-prd.component.css'
})
export class AdminAddPrdComponent {
  newProduct:Iproduct={} as Iproduct;
constructor(private productWithApi:ProductWithApiService){}
addProduct(){

  // let pr1:Iproduct={
  //   name: "Product1",
  //   price: 5000,
  //   id: 0,
  //   quantity: 0,
  //   categoryID: 0,
  //   PrdimgURL: '',
  //   Material: ''
  // }
  // this.productWithApi.addproduct(pr1).subscribe({
  //   next:(data)=>{
  //     console.log(data);

  //   }
  // })


    this.productWithApi.addproduct(this.newProduct).subscribe({
    next:(data)=>{
      console.log(data);

    }
  })

}
}
