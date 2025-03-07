import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../Model/icategory';
import { Iproduct } from '../../Model/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryWithApiService } from '../../Service/category-with-api.service';

@Component({
  selector: 'app-category-details',
  imports: [CommonModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent {
  selectedCategory: ICategory | null = null;
  productList: Iproduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catWithApi: CategoryWithApiService
  ) {}

  ngOnInit() {
    const categoryId = this.route.snapshot.paramMap.get('id');
    if (categoryId) {
      this.getCategoryById(categoryId);
    }
  }

  getCategoryById(categoryId: string) {
    this.catWithApi.getCategoryById(categoryId).subscribe({
      next: (data) => {
        this.selectedCategory = data;
        this.getProductsByCategory(categoryId);
      },
      error: (err) => console.error(`Error fetching category ${categoryId}:`, err)
    });
  }

  getProductsByCategory(categoryId: string) {
    this.catWithApi.getProductsByCategoryId(categoryId).subscribe({
      next: (data) => {
        this.productList = data;
      },
      error: (err) => console.error(`Error fetching products for category ${categoryId}:`, err)
    });
  }

   // Navigate to Product Details Page
   viewProductDetails(productId: number) {
    this.router.navigate(['/product', productId]); // Update route accordingly
  }
}
