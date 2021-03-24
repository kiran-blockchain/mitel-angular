import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
     cartItems: Array<any>;
    constructor() {
        this.cartItems = [];
    }
    addItemToCart(item: any) {
        this.cartItems.push(item);
    }
    removeItemFromCart(item: any) {

    }
    getCartItems() {
        return this.cartItems;
    }
};