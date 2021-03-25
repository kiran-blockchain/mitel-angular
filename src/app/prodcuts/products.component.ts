import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
    templateUrl:"./products.component.html",
    selector:"app-products"
})
export class ProductsComponent implements OnInit{
    products =[{
        name:"Product One",
        id:1,
        price:40000,
        rating:5,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/klphn680/hand-juicer/j/i/g/aluminium-hand-juicer-heavy-duty-single-press-lemon-squeezer-original-imagyrt6bz3nb6qk.jpeg?q=70"
    },
    {
        name:"Product Two",
        id:2,
        price:50000,
        rating:3,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/kl175ow0/hand-juicer/e/z/z/plastic-hand-juicer-fruit-and-vegetable-pinkpack-of-1-foxter-original-imagy8zdtc5ywx4t.jpeg?q=70"
    },
    {
        name:"Product Three",
        id:3,
        price:60000,
        rating:4,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/klphn680/hand-juicer/j/i/g/aluminium-hand-juicer-heavy-duty-single-press-lemon-squeezer-original-imagyrt6bz3nb6qk.jpeg?q=70"
    },{
        name:"Product One",
        id:4,
        price:40000,
        rating:2,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/klphn680/hand-juicer/j/i/g/aluminium-hand-juicer-heavy-duty-single-press-lemon-squeezer-original-imagyrt6bz3nb6qk.jpeg?q=70"
    },
    {
        name:"Product Two",
        id:4,
        price:50000,
        rating:2,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/kl175ow0/hand-juicer/e/z/z/plastic-hand-juicer-fruit-and-vegetable-pinkpack-of-1-foxter-original-imagy8zdtc5ywx4t.jpeg?q=70"
    },
    {
        name:"Product Three",
        id:6,
        price:60000,
        rating:1,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/klphn680/hand-juicer/j/i/g/aluminium-hand-juicer-heavy-duty-single-press-lemon-squeezer-original-imagyrt6bz3nb6qk.jpeg?q=70"}


]

  constructor(private cartSvc:CartService){
   console.log("I am the product constructor")
  }
    ngOnInit(): void {
        console.log("I am the product init");
    }

 
  addItem(item:any){
      this.cartSvc.addItemToCart(item);
  }
  handleUserRating(data:any,p:any){
      console.log(data);
      this.products.forEach(item=>{
          if(item.id==p.id){
              item.rating = parseInt(data);
          }
      });
      console.log(this.products);
      
  }
}