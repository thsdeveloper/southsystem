import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DragaoListComponent} from "./components/dragao-list/dragao-list.component";
import {DragaoDetailsComponent} from "./components/dragao-details/dragao-details.component";
import {DragaoCreateComponent} from "./components/dragao-create/dragao-create.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import { AuthGuard } from '@auth0/auth0-angular';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'dragoes', component: DragaoListComponent, canActivate: [AuthGuard]},
  { path: 'dragoes/:id', component: DragaoDetailsComponent, canActivate: [AuthGuard]},
  { path: 'create', component: DragaoCreateComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
