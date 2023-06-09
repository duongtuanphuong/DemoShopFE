import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  listProduct : any;
  listItemInCart : any;

  constructor(private productService: ProductService,public cartService:CartService){}

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct(){
    this.productService.getListProduct().subscribe(data =>{
      this.listProduct = data;
      this.cartService.loadCart();
    })
  }

  addToCart(item: any){
    this.cartService.getItems();
    this.cartService.addToCart(item,1);
  }

  removeFromCart(item:any){
    this.cartService.remove(item);
  }

  updateQuantity(item: any,event: any){
    let quantity : number = event.target.value;
    this.cartService.updateCart(item,quantity);
  }


}
