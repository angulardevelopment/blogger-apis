import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { ProductCategory } from 'src/app/shared/models/productCategory';
import { ProductCategoryService } from '../../shared/service/product-category.service';
// import { ProductCategoryService } from 'src/app/shared/service/product-category.service';

@Component({
  selector: 'app-create-productCategory',
  templateUrl: './create-product-category.component.html',
  styleUrls: ['./create-product-category.component.css'],
  standalone: false
})
export class CreateProductCategoryComponent implements OnInit {
  registerForm: FormGroup;
  submit = false;
  constructor(
    private fb: FormBuilder,
    @Inject(ProductCategoryService) private service: ProductCategoryService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      category: ['', Validators.required],
      imageURL: ['', Validators.required],
      desc: ['', Validators.required],
      isVisible: ['', Validators.required]
    }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  //Fill your code here

  onSubmit() {

    if (this.registerForm.valid && this.submit) {

      this.service.saveProduct(this.registerForm.value);
      this.router.navigate(['/productCategory/show']);
    }
    else {
      this.registerForm.reset();
    }
  }

  clearForm(e){
    console.log(e, 'dfvsd');
      this.registerForm.reset(this.registerForm.value);
      return;

  }


}
