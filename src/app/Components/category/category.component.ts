import { Component, OnInit } from '@angular/core';
import { CategoryWithApiService } from '../../Service/category-with-api.service';
import { ICategory } from '../../Model/icategory';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Iproduct } from '../../Model/iproduct';
import { CategoryDetailsComponent } from "../category-details/category-details.component";

@Component({
  selector: 'app-category',
  imports: [CommonModule, CategoryDetailsComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent  implements OnInit {
// String(arg0: number): string {
// throw new Error('Method not implemented.');
// }

//   catList: ICategory[] = [];
//   productList: Iproduct[] = []; // List of products, initially empty

//   selectedCategory: ICategory | null = null;
//  constructor(private catWithApi:CategoryWithApiService ,private router: Router){}
//  ngOnInit() {
//   this.catWithApi.getAllCategory().subscribe({
//     next:(data)=>{
//       console.log(data);
//       this.catList = data;

//     }
//   });



// }




// getAllCategories() {
//   this.catWithApi.getAllCategory().subscribe({
//     next: (data) => {
//       console.log(data);
//       this.catList = data;
//     },
//     error: (err) => console.error('Error fetching categories:', err)
//   });
// }

// // Fetch a single category by ID
// getCategoryById(categoryId: string) {
//   this.catWithApi.getCategoryById(categoryId).subscribe({
//     next: (data) => {
//       console.log('Fetched Category:', data);
//       this.selectedCategory = data;

//       // After fetching the category, get the products by category ID
//       this.getProductsByCategory(categoryId);
//     },
//     error: (err) => console.error(`Error fetching category ${categoryId}:`, err)
//   });
// }

// // Fetch products based on the category ID
// getProductsByCategory(categoryId: string) {
//   this.catWithApi.getProductsByCategoryId(categoryId).subscribe({
//     next: (data) => {
//       console.log('Products in this category:', data);
//       this.productList = data;  // Store the products related to the category
//     },
//     error: (err) => console.error(`Error fetching products for category ${categoryId}:`, err)
//   });
// }

// // Navigate to product details page
// viewProductDetails(productId: string) {
//   this.router.navigate(['/product', productId]);
// }

// // Method to handle when a category is clicked
// viewProducts(categoryId: string) {
//   this.getCategoryById(categoryId);
// }

catList: ICategory[] = [];
  productList: Iproduct[] = []; // Products related to selected category
  selectedCategory: ICategory | null = null;

  constructor(private catWithApi: CategoryWithApiService, private router: Router) {}

  ngOnInit() {
    this.getAllCategories();

    this.catWithApi.getAllCategory().subscribe({
      next: (data) => {
        this.catList = data;
      },
      error: (err) => console.error('Error fetching categories:', err)
    });
  }

  getAllCategories() {
    this.catWithApi.getAllCategory().subscribe({
      next: (data) => {
        console.log(data);
        this.catList = data;
      },
      error: (err) => console.error('Error fetching categories:', err)
    });
  }

  getCategoryById(categoryId: string) {
    this.catWithApi.getCategoryById(categoryId).subscribe({
      next: (data) => {
        console.log('Fetched Category:', data);
        this.selectedCategory = data;
        this.getProductsByCategory(categoryId);
      },
      error: (err) => console.error(`Error fetching category ${categoryId}:`, err)
    });
  }

  getProductsByCategory(categoryId: string) {
    this.catWithApi.getProductsByCategoryId(categoryId).subscribe({
      next: (data) => {
        console.log('Products in this category:', data);
        this.productList = data;
      },
      error: (err) => console.error(`Error fetching products for category ${categoryId}:`, err)
    });
  }

  viewProductDetails(productId: string) {
    this.router.navigate(['/product', productId]);
  }

  viewProducts(categoryId: string) {
    this.router.navigate(['/category', categoryId]); // Redirect to the details page
  }
}
