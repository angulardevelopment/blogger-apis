import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogRoutingModule } from './app-routing.module';
import { CatalogComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateProductCategoryComponent } from './category/create-product-category/create-product-category.component';
import { ViewProductCategoryComponent } from './category/view-product-category/view-product-category.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CreateProductCategoryComponent,
    ViewProductCategoryComponent,
    DashboardComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    // CatalogRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CatalogModule { }
