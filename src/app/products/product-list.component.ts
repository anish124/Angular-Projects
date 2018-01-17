import { Component,OnInit } from '@angular/core';
import {IProduct} from'./product';

import { ProductService } from './products/product.service';

@Component({
  
  moduleId: module.id,  
  selector:'pm-products',
   templateUrl:'product-list.component.html',
   styleUrls:['product-list-component.css']
  //template:'Hello world'
  //'app/products/product-list.component.html',
  
  
})

export class ProductListComponent implements OnInit{
imageWidth:number=50;
imageMargin:number=2;
  pageTitle  :String='Product List';
listFilter:String;
showImage: boolean = false;  

products:IProduct[];
private _productService;
constructor (productService:ProductService){

this._productService=productService;
}
//products:IProduct[]=  [

//     {
//       "productId": 1,
//       "productName": "Leaf Rake",
//       "productCode": "GDN-0011",
//       "releaseDate": "March 19, 2016",
//       "description": "Leaf rake with 48-inch wooden handle.",
//       "price": 19.95,
//       "starRating": 10.2,
//       "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
//   },
//   {
//       "productId": 2,
//       "productName": "Garden Cart",
//       "productCode": "GDN-0023",
//       "releaseDate": "March 18, 2016",
//       "description": "15 gallon capacity rolling garden cart",
//       "price": 32.99,
//       "starRating": 4.2,
//       "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
//   }
//   ];

  toggleImage(): void {
    this.showImage = !this.showImage;
}

ngOnInit():void{
 // console.log("In OnInit");
 
 this.products=this._productService.getProducts();

}
onRatingClicked(message : string)  {
  this.pageTitle= 'Product List :'+  message;
}
}
