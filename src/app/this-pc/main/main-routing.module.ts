import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalDiskCComponent } from './local-disk-c/local-disk-c.component';
import { LocalDiskDComponent } from './local-disk-d/local-disk-d.component';


const routes: Routes = [
  {
    path: 'local-disk-c', component: LocalDiskCComponent
  },
  {
    path: 'local-disk-d', component: LocalDiskDComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
