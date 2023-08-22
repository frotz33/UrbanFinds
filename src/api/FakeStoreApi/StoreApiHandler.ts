import axios from 'axios';
import { IFetchedProduct } from './types';

export class StoreApiHandler {
  static getProducts = async () => {
    try {
      const fetchedProducts = await axios.get<IFetchedProduct[]>(
        'https://fakestoreapi.com/products'
      );
      return StoreApiModel.modelProducts(fetchedProducts.data);
    } catch (error) {
      return [];
    }
  };
  static getSingleProduct = async (id: number) => {
    try {
      const fetchedProduct = await axios.get<IFetchedProduct>(
        `https://fakestoreapi.com/products/${id}`
      );
      return StoreApiModel.modelSingleProduct(fetchedProduct.data);
    } catch (error) {
      console.log(error);
    }
  };
}
export class StoreApiModel {
  static modelProducts = (data: IFetchedProduct[]) => {
    const mappedProducts = data.map((product) => {
      return { ...product, quantity: 0 };
    });
    return mappedProducts;
  };
  static modelSingleProduct = (product: IFetchedProduct) => {
    return { ...product, quantity: 0 };
  };
}
