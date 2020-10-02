export enum ActionTypes {
    addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
    addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
    addProductToCartFaluire = 'ADD_PRODUCT_TO_CART_FALUIRE'
}


export interface IProduct {
    id: number;
    title: string;
    price: number;
}

export interface ICartItems {
product: IProduct;
quantidy: number;
}

export interface ICartState {
items: ICartItems[];
failureStockCheck: number[];

}