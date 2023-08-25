import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainModule } from './this-pc/main/main.module';
import { ThisPcHomeComponent } from './this-pc-home/this-pc-home.component';
import { ThisPcComponent } from './this-pc/this-pc.component';


const routes: Routes = [{
  path: '', redirectTo: 'this-pc', pathMatch: 'full'
},
{
  path: 'this-pc', component: ThisPcHomeComponent
},
{
  path: 'this-pc-home', component: ThisPcComponent
},
{
  path: 'this-pc-disk', loadChildren: () => import('./this-pc/main/main-routing.module').then((module) => module.MainRoutingModule)
},
{
  path: "**", component: PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
