import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../shared/models/productCategory';
import { ProductCategoryService } from '../../shared/service/product-category.service';
// import { ProductCategory } from 'src/app/shared/models/productCategory';
// import { ProductCategoryService } from 'src/app/shared/service/product-category.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product-category.component.html',
  styleUrls: ['./view-product-category.component.css'],
  standalone: false
})
export class ViewProductCategoryComponent implements OnInit {

  productCategory:ProductCategory
  constructor(public service: ProductCategoryService){}

  ngOnInit() {
	//Fill your code here
  console.log(this.service, 'dd');

  }

}
