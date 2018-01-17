export interface IProduct{
    productId:number;
    productName:String;
    productCode:String;
    releaseDate:String;
    price:number;
    starRating:number;
    imageUrl:String;
    description:String;

}

// export class Product implements IProduct{

//     constructor (public productId:number,
//         public productName:String,
//         public productCode:String,
//         public releaseDate:String,
//         public price:number,
//         public starRating:number,
//         public imageUrl:String,
//         public description:String
//     ){}
//     calculatorDiscount(percent:number  ):number{
// return this.price-(this.price* percent/100);
//     } 
// }  