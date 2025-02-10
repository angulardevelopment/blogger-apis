import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductCategoryComponent } from './category/create-product-category/create-product-category.component';
import { ViewProductCategoryComponent } from './category/view-product-category/view-product-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// CatalogCreation
const routes: Routes = [

  { path: 'productCategory', component: DashboardComponent,
  children: [
     { path: 'create', component: CreateProductCategoryComponent },
     { path: 'show', component: ViewProductCategoryComponent }

  ],
},
  { path: '',   redirectTo: '/productCategory', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
