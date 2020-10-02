import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import { addProductToCartFaluire, addProductToCartRequest, addProductToCartSuccess } from './actions';
import { ActionTypes } from './types';

interface IStock {
    id: number;
    quantidy: number;
}

type checkProductStockRequest = ReturnType< typeof addProductToCartRequest>

function* checkProductStock ({payload}: checkProductStockRequest ) {
const { product } = payload;

const currenyQuantidy: number = yield select((state: IState) => {
  return state.cart.items.find(item => item.product.id === product.id)?.quantidy ?? 0
});

const availableStockResponse : AxiosResponse<IStock>= yield call(api.get, `stock/${product.id}`)

    if(availableStockResponse.data.quantidy > currenyQuantidy){
        yield put(addProductToCartSuccess(product))
    } else {
        yield put(addProductToCartFaluire(product.id))
    }


takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
}

export default all([

]);