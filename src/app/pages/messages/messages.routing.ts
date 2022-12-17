import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesPage } from 'src/app/pages/messages/messages.page';

const ROUTES: Routes = [
  {
    path: '',
    component: MessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
