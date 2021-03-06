import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
 {path:'', component: MainComponent},
 {path:'admin', component: AdminComponent,
  children:[
    {path:'products', component: ProductsComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
