
 import { RECEIVE_BANNER_DATA, REQUEST_BANNER_DATA, REQUEST_CATEGORIES_DATA, RECEIVE_CATEGORIES_DATA } from './constants';

export const requestBannerData = () => ({type: REQUEST_BANNER_DATA });
export const receiveBannerData = data => ({type: RECEIVE_BANNER_DATA, payload: data });

export const requestCategoriesData = () => ({type: REQUEST_CATEGORIES_DATA});
export const receiveCategoriesData = data => ({type: RECEIVE_CATEGORIES_DATA, payload: data});
