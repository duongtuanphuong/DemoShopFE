import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  listCategory: any;

  constructor(private categoryService: CategoryService){

  }

  ngOnInit(): void {
    this.getListCategory();
  }

  getListCategory(){
    this.categoryService.getListCategory().subscribe({
      next: res =>{
        this.listCategory = res;
      }
    })
  }

}
