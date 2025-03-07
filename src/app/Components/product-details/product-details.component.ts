import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProductService } from '../../Service/service-product.service';
import { Iproduct } from '../../Model/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductWithApiService } from '../../Service/product-with-api.service';
import { ConfirmComponent } from "../confirm/confirm.component";

@Component({
  selector: 'app-product-details',
  imports: [FormsModule, CommonModule, ConfirmComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit  {
String(arg0: number|undefined): any {
throw new Error('Method not implemented.');
}
  // ActivatedRoute = > service done => get value from url
  constructor( private activeRoute: ActivatedRoute , private productService:ServiceProductService ,private router:Router,private productWithApi:ProductWithApiService){}

  product:Iproduct|undefined=undefined;
  isFormVisible: boolean = false;
  productId:number = 0;
  //Day5
  IDs:number[] = [];
  currentIndex:number = 0;
ngOnInit(): void {
  // this.productId = Number(this.activeRoute.snapshot.paramMap.get('prdID'))||0; // getten id done
  // console.log(this.product);

this.IDs=this.productService.getIDSProduct();
console.log(this.IDs);
this.activeRoute.paramMap.subscribe((params) => {
  //Day5
  this.productId=Number(params.get('prdID'))||0;
  console.log('Product ID:', this.productId);
  // this.product=this.productService.getPrdDetailsById(this.productId)
  // console.log(this.product);
// let prd=this.productService.getPrdDetailsById(this.productId)
// console.log(prd);
//   // fix error end prev or next
//   if(prd){
//     this.product=prd
//   }else{
//     alert('not found product')
//     this.router.navigate(['**'])
//   }


//Day6
if (this.productId) {
this.productWithApi.getProductById(String(this.productId)).subscribe({
  next:(data)=>{
this.product=data;
console.log(data);

  },error:(err)=>{
    console.log(err);

  }
})
}else {
      this.product = {
        id: 0,
        name: '',
        price: 0,
        quantity: 0,
        categoryID: 0,
        PrdimgURL: '',
        Material: '',
      };

    }


});




// this.activeRoute.paramMap.subscribe((params) => {
//   this.productId = Number(params.get('prdID')) || 0;
//   if (this.productId) {
//     this.productWithApi.getProductById(String(this.productId)).subscribe({
//       next: (data) => {
//         this.product = data;
//       },
//       error: (err) => {
//         console.error('Error fetching product:', err);
//       },
//     });
//   } else {
//     this.product = {
//       id: 0,
//       name: '',
//       price: 0,
//       quantity: 0,
//       categoryID: 0,
//       PrdimgURL: '',
//       Material: '',
//     };
//   }
// });



  }


  //Day6 Delete Product

  // deleteProduct(prdId: number): void {
  //   this.productWithApi.deleteProduct(String(prdId)).subscribe({
  //     next: (data) => {
  //       console.log('Product deleted:', data);
  //     },
  //     error: (err) => {
  //       console.error('Error deleting product:', err);
  //     }
  //   });
  // }



  // Day6 Delete confirm
isDialogVisible = false;


openDialog(): void {
  this.isDialogVisible = true;
}

closeDialog(): void {
  this.isDialogVisible = false;
  this.router.navigate(['/product']);
}

   deleteProduct(prdId: number): void {
    this.productWithApi.deleteProduct(String(prdId)).subscribe({
      next: (data) => {
        console.log('Product deleted:', data);
      },
      error: (err) => {
        console.error('Error deleting product:', err);
      }
    });

    console.log('Product deleted');
    this.closeDialog();
  }





  /// Day6 update
  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }
  updateProduct(): void {
    if (this.product) {
      this.productWithApi.updateProduct(this.product).subscribe({
        next: (updatedProduct) => {
          console.log('Product updated:', updatedProduct);
          this.router.navigate(['/product', updatedProduct.id]);
        },
        error: (err) => {
          console.error('Error updating product:', err);
        },
      });

      this.isFormVisible = false;

    }

  }






//Day5
prevFun(){
this.currentIndex=this.IDs.findIndex((ele)=>ele==this.productId)
// console.log(this.currentIndex);

// if (this.currentIndex > 0) {
//   this.currentIndex--;
//   this.router.navigate(['/product', this.IDs[this.currentIndex]]);}
this.router.navigate(['/product',this.IDs[--this.currentIndex]])
}

nextFunc(){
  this.currentIndex=this.IDs.findIndex((ele)=>ele==this.productId)
  // console.log(this.currentIndex);



  // if (this.currentIndex < this.IDs.length - 1) {
  //   this.currentIndex++;
  //   this.router.navigate(['/product', this.IDs[this.currentIndex]]);
  // }
    this.router.navigate(['/product',this.IDs[++this.currentIndex]])

}

}
