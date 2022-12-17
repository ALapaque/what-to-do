import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageDetailsPage } from 'src/app/pages/message-details/message-details.page';

const routes: Routes = [
  {
    path: '',
    component: MessageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageDetailsPageRoutingModule {}
