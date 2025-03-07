import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ICategory } from '../Model/icategory';
import { Observable } from 'rxjs';
import { Iproduct } from '../Model/iproduct';
@Injectable({
  providedIn: 'root'
})
export class CategoryWithApiService {

  constructor(private httpClient:HttpClient) { }
  // URL:string=`${environment.URL}/category`
  URL:string=`${environment.URL}/products`
  getAllCategory():Observable<ICategory[]> {{
    return this.httpClient.get<ICategory[]>('http://localhost:3000/category')
  }
  }

  getCategoryById(categoryId: string): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`http://localhost:3000/category/${categoryId}`);
  }

  // Get products by category ID
  getProductsByCategoryId(categoryId: string): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`http://localhost:3000/products?categoryID=${categoryId}`);
  }

}
