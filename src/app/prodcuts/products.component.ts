import { Component } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
    templateUrl:"./products.component.html",
    selector:"app-products"
})
export class ProductsComponent {
    products =[{
        name:"Product One",
        id:1,
        price:40000,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/klphn680/hand-juicer/j/i/g/aluminium-hand-juicer-heavy-duty-single-press-lemon-squeezer-original-imagyrt6bz3nb6qk.jpeg?q=70"
    },
    {
        name:"Product Two",
        id:2,
        price:50000,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/kl175ow0/hand-juicer/e/z/z/plastic-hand-juicer-fruit-and-vegetable-pinkpack-of-1-foxter-original-imagy8zdtc5ywx4t.jpeg?q=70"
    },
    {
        name:"Product Three",
        id:3,
        price:60000,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/klphn680/hand-juicer/j/i/g/aluminium-hand-juicer-heavy-duty-single-press-lemon-squeezer-original-imagyrt6bz3nb6qk.jpeg?q=70"
    },{
        name:"Product One",
        id:1,
        price:40000,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/klphn680/hand-juicer/j/i/g/aluminium-hand-juicer-heavy-duty-single-press-lemon-squeezer-original-imagyrt6bz3nb6qk.jpeg?q=70"
    },
    {
        name:"Product Two",
        id:2,
        price:50000,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/kl175ow0/hand-juicer/e/z/z/plastic-hand-juicer-fruit-and-vegetable-pinkpack-of-1-foxter-original-imagy8zdtc5ywx4t.jpeg?q=70"
    },
    {
        name:"Product Three",
        id:3,
        price:60000,
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/klphn680/hand-juicer/j/i/g/aluminium-hand-juicer-heavy-duty-single-press-lemon-squeezer-original-imagyrt6bz3nb6qk.jpeg?q=70"}


]

  constructor(private cartSvc:CartService){

  }
  addItem(item:any){
      this.cartSvc.addItemToCart(item);
  }
}