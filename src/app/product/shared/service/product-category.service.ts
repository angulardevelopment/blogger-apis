import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/productCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  productCategory:ProductCategory;

saveProduct(val){
  this.productCategory = val;
}

	//Fill your code here


}
