import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = 
[
{ path: '', component: BodyComponent },
{ path: 'about', component: AboutComponent },
{ path: 'product/:id', component: ProductdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
