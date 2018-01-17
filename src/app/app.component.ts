import { Component } from '@angular/core';
//import { ProductService } from './product/product.service';
import { ProductService } from './products/product.service';
@Component({

  moduleId:module.id, 
  selector:'pm-app',template:`<div><h1>{{pageTitle}}</h1><pm-products></pm-products></div>`,

  providers :[ProductService]
    
})

export class AppComponent{
  pageTitle  :String='Acme Product Management';
  id: string;
}
