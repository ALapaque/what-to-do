import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { MessageComponentModule } from 'src/app/pages/messages/components/message/message.module'

import { MessagesPage } from 'src/app/pages/messages/messages.page'
import { MessagesRoutingModule } from 'src/app/pages/messages/messages.routing'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    MessagesRoutingModule
  ],
  declarations: [ MessagesPage ]
})
export class MessagesPageModule {
}
