import { Reducer } from 'redux'
import produce from 'immer';
import { ActionTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
    items: [],
    failureStockCheck: [],
}
const cart: Reducer<ICartState> = (state= INITIAL_STATE, action)=> {
    return produce(state, draft => {
    switch(action.type){
        case ActionTypes.addProductToCartSuccess:{

            const { product } = action.payload;

            const productInCartIndex = draft.items.findIndex(item =>
                item.product.id === product.id,
                );
                if(productInCartIndex >= 0){
                    draft.items[productInCartIndex].quantidy++;
                }else {
                 
                draft.items.push( {
                    product,
                    quantidy: 1,
                   });
   
                }
          
                break;

            }
            
                case ActionTypes.addProductToCartFaluire: {
                    draft.failureStockCheck.push(action.payload.productID)
                  
                    break;
                }
                default: {
                    return draft;
        }
            
}
});
}

export default cart;
