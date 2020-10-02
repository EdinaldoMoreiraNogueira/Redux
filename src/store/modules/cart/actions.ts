import { ActionTypes, IProduct } from "./types";


export function addProductToCartRequest(product: IProduct) {
    return {
        type: ActionTypes.addProductToCartRequest,
        payload: {
            product,
        }
    }

}
export function addProductToCartSuccess(product: IProduct) {
    return {
        type: ActionTypes.addProductToCartSuccess,
        payload: {
            product,
        }
    }

}

export function addProductToCartFaluire(productID: number) {
    return {
        type: ActionTypes.addProductToCartFaluire,
        payload: {
            productID,
        }
    }

}

