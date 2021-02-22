import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DragaoListComponent} from "./components/dragao-list/dragao-list.component";
import {DragaoDetailsComponent} from "./components/dragao-details/dragao-details.component";
import {DragaoCreateComponent} from "./components/dragao-create/dragao-create.component";

const routes: Routes = [
  { path: '', redirectTo: 'dragoes', pathMatch: 'full' },
  { path: 'dragoes', component: DragaoListComponent },
  { path: 'dragoes/:id', component: DragaoDetailsComponent },
  { path: 'create', component: DragaoCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
