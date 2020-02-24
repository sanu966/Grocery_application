import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_BANNER_DATA, REQUEST_CATEGORIES_DATA } from './constants';
import { receiveBannerData, receiveCategoriesData } from './actions';
import { BannerData, CategoriesData} from '../Api';

function* getBannerData(){
    try{
        const data = yield call(BannerData);
        yield put(receiveBannerData(data));
    }
    catch(e){
        console.log(e);
    }
}

function* getCategoriesData(){
    try{
        const data = yield call(CategoriesData);
        yield put(receiveCategoriesData(data));
    }
    catch(e){
        console.log(e);
    }
}

export function* homeSaga(){
    yield takeLatest(REQUEST_BANNER_DATA, getBannerData);
    yield takeLatest(REQUEST_CATEGORIES_DATA, getCategoriesData);
}
