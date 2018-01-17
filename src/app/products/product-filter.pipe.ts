
import {PipeTransform,Pipe} from '@angular/core';
import { IProduct} from './product';
@Pipe({
   name:'ProductFilter'
})




export class ProductFilter implements PipeTransform{
    transform (value:IProduct[],filterBy:string):IProduct[]{
     filterBy=filterBy?filterBy.toLocaleLowerCase():null;

        return filterBy ? value.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1):value;
    }
//().indexOf(filte r By)!== -1):value

    //}
}