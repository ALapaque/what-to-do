import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPage } from 'src/app/pages/home/pages/edit/edit.page'

const routes: Routes = [
  {
    path: '',
    component: EditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPageRoutingModule {}
