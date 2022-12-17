import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageDetailsPage } from 'src/app/pages/message-details/message-details.page';

import { IonicModule } from '@ionic/angular';
import { MessageDetailsPageRoutingModule } from 'src/app/pages/message-details/message-details.routing'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageDetailsPageRoutingModule
  ],
  declarations: [MessageDetailsPage]
})
export class MessageDetailsPageModule {}
