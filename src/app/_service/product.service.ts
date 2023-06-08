import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../class/product';

const PRODUCT_API = "http://localhost:8080/api/product/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getListProduct(): Observable<any> {
    return this.http.get(PRODUCT_API, httpOptions);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(PRODUCT_API + id, httpOptions);
  }


  createProduct(product: Product, file: File): Observable<any> {
    const formData: FormData = new FormData();
    Object.keys(product).forEach(key => {
      let value = product[key as keyof Product];
      if (typeof value === 'number') {
        value = value.toString();
      }
      formData.append(key, value);
    });
    formData.append('file', file);
    return this.http.post(PRODUCT_API + 'create', formData);
  }

  updateProduct(id: number, product: Product, file: File): Observable<any> {
    const formData: FormData = new FormData();
    Object.keys(product).forEach(key => {
      let value = product[key as keyof Product];
      if (typeof value === 'number') {
        value = value.toString();
      }
      formData.append(key, value);
    });
    formData.append('file', file);
    return this.http.put(PRODUCT_API + 'update/' +id,formData);
  }


  deleteProduct(id: number): Observable<any> {
    return this.http.delete(PRODUCT_API + 'delete/' + id, httpOptions);
  }


}
