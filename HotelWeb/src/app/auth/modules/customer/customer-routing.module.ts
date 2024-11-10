import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CuartosComponent } from './components/cuartos/cuartos.component';

const routes: Routes = [{ path: '', component: CustomerComponent },{ path: 'cuartos', component: CuartosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
