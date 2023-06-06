import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../class/category';

const CATEGORY_API = "http://localhost:8080/api/category/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  getListCategory():Observable<any>{
    return this.http.get(CATEGORY_API,httpOptions);
  }

  getCategoryById(id: number):Observable<Category>{ 
    return this.http.get<Category>(CATEGORY_API + id,httpOptions);
  }

  createCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(CATEGORY_API + 'create',JSON.stringify(category),httpOptions);
  }

  updateCategory(category: Category):Observable<Category>{
    return this.http.put<Category>(CATEGORY_API + 'update/' + category.id,JSON.stringify(category),httpOptions);
  }

  deleteCategory(id: number):Observable<any>{
    return this.http.delete(CATEGORY_API + 'delete/' + id,httpOptions);
  }

}
