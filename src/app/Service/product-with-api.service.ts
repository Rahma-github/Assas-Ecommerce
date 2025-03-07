import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Iproduct } from '../Model/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductWithApiService {

  constructor(private httpClient:HttpClient) { }

  // URL:string='http://localhost:3000/products'
  URL:string=`${environment.URL}/products`

  //HttpClient => to use all method in backend
getAllProducts():Observable<Iproduct[]> {{
  return this.httpClient.get<Iproduct[]>(this.URL)
}
}


getProductById(prdId:string):Observable<Iproduct>{
  return this.httpClient.get<Iproduct>(`${this.URL}/${prdId}`)
}

//query string
//search with material
searchWithMaterial(material:string):Observable<Iproduct[]>{
  return this.httpClient.get<Iproduct[]>(`${this.URL}?Material=${material}`)
}

// post product
addproduct(prd:Iproduct):Observable<Iproduct>{
  return this.httpClient.post<Iproduct>(this.URL,prd)
}

updateProduct(prd: Iproduct): Observable<Iproduct> {
  return this.httpClient.put<Iproduct>(`${this.URL}/${prd.id}`, prd);
}
deleteProduct(prdId: string): Observable<Iproduct> {
  return this.httpClient.delete<Iproduct>(`${this.URL}/${prdId}`);
}


getProductsByCategory(categoryId: string): Observable<Iproduct[]> {
  return this.httpClient.get<Iproduct[]>(`${this.URL}/category/${categoryId}`);
}


}

