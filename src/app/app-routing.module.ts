import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexDetailComponent } from './index-detail/index-detail.component';
import { IndexOverviewComponent } from './index-overview/index-overview.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'',redirectTo:'/todo',pathMatch:'full'},
  {path:"todo",component:TodoComponent},
  { path:"index",
    component:IndexComponent,
    children:[
      {path:"overview",component:IndexOverviewComponent},
      {path:"detail",component:IndexDetailComponent},
    ]
  },
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
