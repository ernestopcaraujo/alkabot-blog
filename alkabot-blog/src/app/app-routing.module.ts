import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpostsComponent } from './components/viewposts/viewposts.component';

const routes: Routes = [
  {path:'',component:ViewpostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
