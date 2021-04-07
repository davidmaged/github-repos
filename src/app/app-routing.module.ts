import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostReposComponent } from './most-repos/most-repos.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';


const routes: Routes = [
  {path:'repo', component: RepoDetailsComponent},
  {path:'', component: MostReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
